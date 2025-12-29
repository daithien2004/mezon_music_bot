import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import {
  Command,
  Args,
  AutoContext,
  SmartMessage,
  EmbedBuilder,
  Nezon,
} from '@n0xgg04/nezon';


import { TAROT_DECK, TarotCard } from '../data/tarot.data';

@Injectable()
export class TarotHandler {
  private readonly logger = new Logger(TarotHandler.name);
  private allCards = TAROT_DECK;

  // Pseudo-random number generator (Mulberry32)
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

  private createCardEmbed(card: TarotCard, isReversed: boolean, titlePrefix = ''): EmbedBuilder {
    const status = isReversed ? '(Ngược)' : '(Thuận)';
    const color = isReversed ? '#E74C3C' : '#2ECC71'; // Red for reversed, Green for upright
    
    // Image mapping logic based on ID
    // Major Arcana: ar00.jpg -> ar21.jpg
    // Minor Arcana: wands (wa01), cups (cu01), swords (sw01), pentacles (pe01)
    // ID in data file (e.g., 'ar00', 'wa01') matches the file name format on sacred-texts
    const imageUrl = `https://www.sacred-texts.com/tarot/pkt/img/${card.id}.jpg`;

    const embed = new EmbedBuilder()
      .setTitle(`${titlePrefix} ${card.nameVI} (${card.name}) ${status}`)
      .setDescription(
        `**Từ khóa:** ${card.keywords.join(', ')}\n\n` +
        `**Ý nghĩa ${status}:**\n${isReversed ? card.meaningRev : card.meaningUp}`
      )
      .setImage(imageUrl)
      .setColor(color)
      .setFooter('Tarot Việt Hóa - Rider Waite');
      
    return embed;
  }

  @Command({ name: 'tarot', aliases: ['boidich'] })
  async onTarot(
    @Args() args: Nezon.Args,
    @AutoContext() [message]: Nezon.AutoContext,
  ) {
    // Spread mode (3 cards)
    if (args[0] === 'spread' || args[0] === '3') {
      await this.handleSpread(message);
      return;
    }

    // Ask mode (Yes/No)
    if (args[0] === 'ask') {
      const question = args.slice(1).join(' ');
      if (!question) {
        await message.reply(SmartMessage.text('ℹ️ Bạn muốn hỏi gì? Ví dụ: `/tarot ask Hôm nay có mưa không?`'));
        return;
      }
      await this.handleAsk(message, question);
      return;
    }

    // Random mode (explicit)
    if (args[0] === 'random') {
      await this.handleRandomOne(message);
      return;
    }

    // --- Deterministic Daily Draw ---
    let targetUserId = message.senderId;
    let titlePrefix = 'Thông điệp vũ trụ ngày hôm nay';
    
    // Check mentions
    const msgAny = message as any;
    if (msgAny.mentions && msgAny.mentions.length > 0) {
        targetUserId = msgAny.mentions[0].user_id || msgAny.mentions[0].id;
        const targetName = msgAny.mentions[0].username || 'người ấy';
        titlePrefix = `Thông điệp ngày hôm nay cho **${targetName}**`;
    }

    const date = new Date();
    date.setHours(date.getHours() + 7);
    const dateString = date.toISOString().split('T')[0];

    // Seed based on UserID + Date
    const seedStr = `${targetUserId}_${dateString}`;
    const rng = this.createRNG(seedStr);

    const cardIndex = Math.floor(rng() * this.allCards.length);
    const isReversed = rng() < 0.3; 

    const card = this.allCards[cardIndex];

    await message.reply(
      SmartMessage.text(`🔮 **${titlePrefix} (${dateString}):**`)
        .addEmbed(this.createCardEmbed(card, isReversed))
    );
  }

  private async handleRandomOne(message: any) {
    const randomIndex = Math.floor(Math.random() * this.allCards.length);
    const card = this.allCards[randomIndex];
    const isReversed = Math.random() < 0.3;

    await message.reply(
        SmartMessage.text(`🎲 **Rút bài ngẫu nhiên:**`)
          .addEmbed(this.createCardEmbed(card, isReversed, 'Random:'))
      );
  }

  private async handleSpread(message: any) {
    const shuffled = [...this.allCards].sort(() => 0.5 - Math.random());
    const [c1, c2, c3] = shuffled.slice(0, 3);
    
    const p1 = { card: c1, isReversed: Math.random() < 0.3 };
    const p2 = { card: c2, isReversed: Math.random() < 0.3 };
    const p3 = { card: c3, isReversed: Math.random() < 0.3 };

    await message.reply(SmartMessage.text('✨ **Trải bài 3 lá: Quá khứ - Hiện tại - Tương lai** ✨'));

    setTimeout(async () => {
      await message.reply(
        SmartMessage.text('**1️⃣ Quá khứ / Nguyên nhân:**')
          .addEmbed(this.createCardEmbed(p1.card, p1.isReversed))
      );
    }, 500);

    setTimeout(async () => {
      await message.reply(
        SmartMessage.text('**2️⃣ Hiện tại / Hoàn cảnh:**')
          .addEmbed(this.createCardEmbed(p2.card, p2.isReversed))
      );
    }, 1500);

    setTimeout(async () => {
      await message.reply(
        SmartMessage.text('**3️⃣ Tương lai / Kết quả:**')
          .addEmbed(this.createCardEmbed(p3.card, p3.isReversed))
      );
    }, 2500);
  }

  private async handleAsk(message: any, question: string) {
    const randomIndex = Math.floor(Math.random() * this.allCards.length);
    const card = this.allCards[randomIndex];
    
    // 50/50 for Yes/No
    const isReversed = Math.random() < 0.5;
    
    const answerText = isReversed ? 'KHÔNG (NO)' : 'CÓ (YES)';
    const emoji = isReversed ? '❌' : '✅';

    await message.reply(
        SmartMessage.text(`🗣️ **Hỏi:** ${question}\n\n👉 **Trả lời:** ${emoji} ${answerText}`)
          .addEmbed(this.createCardEmbed(card, isReversed))
      );
  }
}
