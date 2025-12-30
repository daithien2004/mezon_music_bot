import { Injectable, Logger } from '@nestjs/common';
import {
  Command,
  Args,
  AutoContext,
  SmartMessage,
  EmbedBuilder,
  Nezon,
} from '@n0xgg04/nezon';

import { TAROT_DECK, TarotCard, MAJOR_META, SUIT_META, MINOR_YES_NO } from '../data/tarot.data';

const CARD_BACK_URL = 'https://i.pinimg.com/736x/8f/3f/14/8f3f140026e792e624c9657ccb1cb340.jpg'; // Generic Mystical Card Back

@Injectable()
export class TarotHandler {
  private readonly logger = new Logger(TarotHandler.name);
  private allCards = TAROT_DECK;

  // --- Helper Methods ---

  private createRNG(seedStr: string) {
    let seed = 0;
    for (let i = 0; i < seedStr.length; i++) {
        seed = ((seed << 5) - seed) + seedStr.charCodeAt(i);
        seed |= 0;
    }
    return function() {
      let t = seed += 0x6D2B79F5;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  private getCardMetadata(card: TarotCard) {
    let element = '';
    let astrology = '';
    let yesNo = 'Có thể';

    if (card.suit === 'major') {
      const meta = MAJOR_META[card.id];
      if (meta) {
        element = meta.element;
        astrology = meta.astrology || '';
        yesNo = meta.yesNo;
      }
    } else if (card.suit) {
        // Minor Arcana
        const suitData = SUIT_META[card.suit];
        element = suitData ? suitData.element : '';
        
        // Infer Yes/No from Name (Ace, Two, etc.)
        const firstWord = card.name.split(' ')[0];
        yesNo = MINOR_YES_NO[firstWord] || 'Có thể';
        
        // Overrides for specific notoriously "bad" cards if we wanted, e.g., 3 of Swords
        if (card.id === 'sw03' || card.id === 'sw09' || card.id === 'sw10' || card.id === 'wa10' || card.id === 'pe05') {
            yesNo = 'Không';
        }
    }

    return { element, astrology, yesNo };
  }

  private createCardEmbed(card: TarotCard, isReversed: boolean, titlePrefix = '', showExtra = false): EmbedBuilder {
    const status = isReversed ? '(Ngược)' : '(Thuận)';
    const color = isReversed ? '#E74C3C' : '#2ECC71';
    const imageUrl = `https://www.sacred-texts.com/tarot/pkt/img/${card.id}.jpg`;
    
    // Get Metadata
    const { element, astrology, yesNo } = this.getCardMetadata(card);

    const embed = new EmbedBuilder()
      .setTitle(`${titlePrefix} ${card.nameVI} - ${card.name} ${status}`)
      .setImage(imageUrl)
      .setColor(color)
      .setDescription(
        `**Từ khóa:** ${card.keywords.join(', ')}\n\n` +
        `**Ý nghĩa ${status}:**\n${isReversed ? card.meaningRev : card.meaningUp}`
      );

    if (showExtra) {
        let extraInfo = `**Nguyên tố:** ${element}`;
        if (astrology) extraInfo += ` | **Tinh tú:** ${astrology}`;
        extraInfo += ` | **Yes/No:** ${yesNo}`;
        embed.setFooter(extraInfo);
    } else {
        embed.setFooter('Tarot Việt Hóa - Rider Waite');
    }
      
    return embed;
  }

  // --- Feature Handlers ---

  @Command({ name: 'tarot' })
  async onTarot(
    @Args() args: Nezon.Args,
    @AutoContext() [message]: Nezon.AutoContext,
  ) {
    const subCommand = args[0] ? args[0].toLowerCase() : '';

    // Route commands
    switch (subCommand) {
        case 'spread':
        case '3':
            await this.handleSpread(message, 'time');
            break;
        case 'love':
            await this.handleSpread(message, 'love');
            break;
        case 'career':
            await this.handleSpread(message, 'career');
            break;
        case 'ask':
            await this.handleAsk(message, args.slice(1).join(' '));
            break;
        case 'random':
            await this.handleRandomOne(message);
            break;
        case 'soul':
            await this.handleSoulCard(message, args.slice(1).join(' '));
            break;
        default:
             await this.handleDaily(message);
             break;
    }
  }

  // 1. Daily Draw (Default)
  private async handleDaily(message: any) {
    let targetUserId = message.senderId;
    let titlePrefix = 'Thông điệp ngày';
    
    const msgAny = message as any;
    if (msgAny.mentions && msgAny.mentions.length > 0) {
        targetUserId = msgAny.mentions[0].user_id || msgAny.mentions[0].id;
        const targetName = msgAny.mentions[0].username || 'người ấy';
        titlePrefix = `Thông điệp cho ${targetName}`;
    }

    const date = new Date();
    date.setHours(date.getHours() + 7);
    const dateString = date.toISOString().split('T')[0];

    const seedStr = `${targetUserId}_${dateString}`;
    const rng = this.createRNG(seedStr);

    const cardIndex = Math.floor(rng() * this.allCards.length);
    const isReversed = rng() < 0.3; 
    const card = this.allCards[cardIndex];

    await message.reply(
      SmartMessage.text(`🔮 **${titlePrefix} hôm nay (${dateString}):**`)
        .addEmbed(this.createCardEmbed(card, isReversed, '', true))
    );
  }

  // 2. Random One
  private async handleRandomOne(message: any) {
    const randomIndex = Math.floor(Math.random() * this.allCards.length);
    const card = this.allCards[randomIndex];
    const isReversed = Math.random() < 0.3;

    await message.reply(
        SmartMessage.text(`🎲 **Lá bài của bạn:**`)
          .addEmbed(this.createCardEmbed(card, isReversed, '', true))
      );
  }

  // 3. Complex Spreads
  private async handleSpread(message: any, type: 'time' | 'love' | 'career' | 'choice') {
    const shuffled = [...this.allCards].sort(() => 0.5 - Math.random());
    const cards = shuffled.slice(0, 3).map(c => ({ card: c, isReversed: Math.random() < 0.3 }));

    let title = '';
    let labels: string[] = [];

    switch (type) {
        case 'time':
            title = 'Trải bài Thời Gian (Time Spread)';
            labels = ['Quá khứ / Nguyên nhân', 'Hiện tại / Hoàn cảnh', 'Tương lai / Kết quả'];
            break;
        case 'love':
            title = 'Trải bài Tình Yêu (Love Spread)';
            labels = ['Bạn trong mối quan hệ', 'Người ấy / Đối phương', 'Kết quả / Tương lai mối quan hệ'];
            break;
        case 'career':
            title = 'Trải bài Công Việc (Career Spread)';
            labels = ['Công việc hiện tại', 'Thách thức / Cơ hội', 'Kết quả dự kiến'];
            break;
    }

    // Send one single message with multiple embeds
    const msg = SmartMessage.text(`✨ **${title}** ✨`);
    
    for (let i = 0; i < 3; i++) {
        // Create embed with specific title prefix for the position
        const embed = this.createCardEmbed(cards[i].card, cards[i].isReversed, `**${i + 1}️⃣ ${labels[i]}:**`, true);
        msg.addEmbed(embed);
    }

    await message.reply(msg);
  }

  // 4. Ask Yes/No
  private async handleAsk(message: any, question: string) {
    if (!question) {
        await message.reply(SmartMessage.text('ℹ️ Bạn muốn hỏi gì? Ví dụ: `/tarot ask Crush có thích mình không?`'));
        return;
    }

    const randomIndex = Math.floor(Math.random() * this.allCards.length);
    const card = this.allCards[randomIndex];
    const isReversed = Math.random() < 0.4; // Slightly more upright chance normally
    
    // Logic Yes/No based on card meta + reversal
    const meta = this.getCardMetadata(card);
    let answer = meta.yesNo;
    
    // Invert answer if reversed
    if (isReversed) {
        if (answer === 'Có') answer = 'Không';
        else if (answer === 'Không') answer = 'Có';
    }

    const emoji = answer === 'Có' ? '✅' : (answer === 'Không' ? '❌' : '🤔');

    await message.reply(
        SmartMessage.text(`🗣️ **Hỏi:** ${question}\n👉 **Trả lời:** ${emoji} **${answer.toUpperCase()}**`)
          .addEmbed(this.createCardEmbed(card, isReversed, '', true))
      );
  }

  // 5. Soul Card
  private async handleSoulCard(message: any, dateInput: string) {
     if (!dateInput) {
        await message.reply(SmartMessage.text('ℹ️ Nhập ngày sinh để tìm Lá Bài Linh Hồn. Ví dụ: `/tarot soul 15/05/2000`'));
        return;
     }

     const parts = dateInput.match(/^(\d{1,2})[\/-](\d{1,2})[\/-](\d{4})$/);
     if (!parts) {
        await message.reply(SmartMessage.text('🚫 Sai định dạng. Dùng DD/MM/YYYY.'));
        return;
     }
     
     const d = parseInt(parts[1], 10);
     const m = parseInt(parts[2], 10);
     const y = parseInt(parts[3], 10);

     // Logic: Soul Card = Sum of Day + Month + Year, then reduce to <= 22
     
     let sum = d + m + y;
     
     // Reduce until <= 21
     const reduce = (n: number) => n.toString().split('').reduce((a,b) => a + parseInt(b), 0);
     
     let soulNumber = reduce(sum);
     while (soulNumber > 21) {
         soulNumber = reduce(soulNumber);
     }

     // Calculate reduced root number (Personality Number in Tarot)
     let rootNumber = soulNumber;
     while (rootNumber > 9) {
        rootNumber = reduce(rootNumber);
     }

     const displayNum = soulNumber === rootNumber ? `${soulNumber}` : `${soulNumber} / ${rootNumber}`;
     
     const id = soulNumber < 10 ? `ar0${soulNumber}` : `ar${soulNumber}`;
     const card = this.allCards.find(c => c.id === id);

     if (!card) {
         await message.reply(SmartMessage.text('⚠️ Không tìm thấy lá bài phù hợp (Lỗi tính toán).'));
         return;
     }

     await message.reply(
         SmartMessage.text(`🧩 **Lá Bài Linh Hồn của bạn (${dateInput}):**\nCon số Tarot: **${displayNum}**`)
         .addEmbed(this.createCardEmbed(card, false, 'Soul Card:', true))
     );
  }
}
