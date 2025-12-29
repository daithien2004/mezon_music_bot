import { Injectable } from '@nestjs/common';
import {
  Command,
  Args,
  AutoContext,
  SmartMessage,
  EmbedBuilder,
  Nezon,
} from '@n0xgg04/nezon';

interface ZodiacSign {
  id: string;
  name: string;
  symbol: string;
  dateRange: string;
}

const ZODIAC_SIGNS: ZodiacSign[] = [
  { id: 'aries', name: 'Bạch Dương', symbol: '♈', dateRange: '21/3 - 19/4' },
  { id: 'taurus', name: 'Kim Ngưu', symbol: '♉', dateRange: '20/4 - 20/5' },
  { id: 'gemini', name: 'Song Tử', symbol: '♊', dateRange: '21/5 - 20/6' },
  { id: 'cancer', name: 'Cự Giải', symbol: '♋', dateRange: '21/6 - 22/7' },
  { id: 'leo', name: 'Sư Tử', symbol: '♌', dateRange: '23/7 - 22/8' },
  { id: 'virgo', name: 'Xử Nữ', symbol: '♍', dateRange: '23/8 - 22/9' },
  { id: 'libra', name: 'Thiên Bình', symbol: '♎', dateRange: '23/9 - 22/10' },
  { id: 'scorpio', name: 'Thiên Yết', symbol: '♏', dateRange: '23/10 - 21/11' },
  { id: 'sagittarius', name: 'Nhân Mã', symbol: '♐', dateRange: '22/11 - 21/12' },
  { id: 'capricorn', name: 'Ma Kết', symbol: '♑', dateRange: '22/12 - 19/1' },
  { id: 'aquarius', name: 'Bảo Bình', symbol: '♒', dateRange: '20/1 - 18/2' },
  { id: 'pisces', name: 'Song Ngư', symbol: '♓', dateRange: '19/2 - 20/3' },
];

const LUCKY_COLORS = ['Đỏ', 'Xanh Dương', 'Xanh Lá', 'Vàng', 'Tím', 'Cam', 'Hồng', 'Trắng', 'Đen', 'Xám'];
const LUCKY_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 69, 88, 99];
const ADVICES = [
  'Hãy cẩn thận lời ăn tiếng nói hôm nay.',
  'Một cơ hội bất ngờ sẽ đến vào buổi chiều.',
  'Tình cảm thăng hoa, hãy tận hưởng!',
  'Nên tránh đầu tư mạo hiểm.',
  'Dành thời gian chăm sóc bản thân nhiều hơn.',
  'Kiên nhẫn là chìa khóa của thành công.',
  'Đừng ngại thử thách những điều mới mẻ.',
  'Một người cũ có thể liên lạc lại với bạn.',
  'Sức khỏe cần được chú trọng, ngủ sớm nhé.',
  'Màu sắc may mắn sẽ mang lại vận khí tốt.',
];

@Injectable()
export class HoroscopeHandler {

  // Seeded Random Helper (reused simplify logic)
  private getSeededRandom(seedStr: string): () => number {
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

  private matchSign(input: string): ZodiacSign | undefined {
    const normalized = input.toLowerCase().replace(/\s/g, '');
    return ZODIAC_SIGNS.find(s => {
      const sName = s.name.toLowerCase().replace(/\s/g, '');
      const sId = s.id;
      return sName.includes(normalized) || sId.includes(normalized);
    });
  }

  @Command({ name: 'tuvi', aliases: ['horoscope', 'cung'] })
  async onHoroscope(
    @Args() args: Nezon.Args,
    @AutoContext() [message]: Nezon.AutoContext,
  ) {
    const input = args.join(' ');
    if (!input) {
      const list = ZODIAC_SIGNS.map(s => `\`${s.name}\``).join(', ');
      await message.reply(SmartMessage.text(`ℹ️ Vui lòng nhập tên cung. Ví dụ: \`/tuvi bachduong\`\nDanh sách: ${list}`));
      return;
    }

    const sign = this.matchSign(input);
    if (!sign) {
      await message.reply(SmartMessage.text('🚫 Không tìm thấy cung hoàng đạo này. Hãy thử lại (ví dụ: Kim Ngưu, Sư Tử, Virgo...).'));
      return;
    }

    // Daily Logic
    const date = new Date();
    date.setHours(date.getHours() + 7);
    const dateString = date.toISOString().split('T')[0];
    
    // Seed = Date + SignID (Same for everyone of that sign on that day)
    const seed = `${dateString}_${sign.id}`;
    const rng = this.getSeededRandom(seed);

    // Randomize specs
    const loveScore = Math.floor(rng() * 5) + 1; // 1-5
    const careerScore = Math.floor(rng() * 5) + 1;
    const moneyScore = Math.floor(rng() * 5) + 1;
    
    const luckyColor = LUCKY_COLORS[Math.floor(rng() * LUCKY_COLORS.length)];
    const luckyNumber = LUCKY_NUMBERS[Math.floor(rng() * LUCKY_NUMBERS.length)];
    const advice = ADVICES[Math.floor(rng() * ADVICES.length)];

    const stars = (n: number) => '⭐'.repeat(n) + '☆'.repeat(5 - n);

    const embed = new EmbedBuilder()
      .setTitle(`${sign.symbol} Tử Vi ${sign.name} (${sign.dateRange})`)
      .setDescription(`**Dự báo ngày ${dateString}**`)
      .addField('💘 Tình cảm', stars(loveScore), true)
      .addField('💼 Sự nghiệp', stars(careerScore), true)
      .addField('💰 Tài lộc', stars(moneyScore), true)
      .addField('🍀 May mắn', `Màu: **${luckyColor}** | Số: **${luckyNumber}**`, false)
      .addField('💡 Lời khuyên', advice, false)
      .setColor('#E67E22')
      .setFooter('Daily Horoscope');

    await message.reply(SmartMessage.text('').addEmbed(embed));
  }
}
