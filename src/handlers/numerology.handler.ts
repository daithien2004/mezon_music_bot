import { Injectable } from '@nestjs/common';
import {
  Command,
  Args,
  AutoContext,
  SmartMessage,
  EmbedBuilder,
  Nezon,
} from '@n0xgg04/nezon';

const NUMEROLOGY_MEANINGS: Record<number, { title: string; desc: string; strengths: string; weaknesses: string }> = {
  2: {
    title: 'Số 2: Người hòa giải',
    desc: 'Bạn là người nhạy cảm, trực giác tốt và luôn mong muốn hòa bình. Bạn sống tình cảm và thích hợp tác.',
    strengths: 'Lắng nghe, thấu hiểu, ngoại giao, tận tâm.',
    weaknesses: 'Dễ bị tổn thương, phụ thuộc, thiếu quyết đoán.',
  },
  3: {
    title: 'Số 3: Người truyền cảm hứng',
    desc: 'Bạn là người sáng tạo, vui vẻ và có khả năng giao tiếp tuyệt vời. Bạn mang lại tiếng cười cho mọi người.',
    strengths: 'Hài hước, sáng tạo, lạc quan, giao tiếp tốt.',
    weaknesses: 'Nông nổi, thiếu kỷ luật, hay thay đổi.',
  },
  4: {
    title: 'Số 4: Người xây dựng',
    desc: 'Bạn là người thực tế, chăm chỉ và đáng tin cậy. Bạn thích sự ổn định và trật tự.',
    strengths: 'Kiên định, tổ chức tốt, trung thành, chi tiết.',
    weaknesses: 'Cứng nhắc, bảo thủ, khó thích nghi.',
  },
  5: {
    title: 'Số 5: Người tự do',
    desc: 'Bạn yêu thích sự tự do, mạo hiểm và những trải nghiệm mới. Bạn ghét sự ràng buộc và nhàm chán.',
    strengths: 'Linh hoạt, thích nghi nhanh, dũng cảm, quyến rũ.',
    weaknesses: 'Thiếu kiên nhẫn, bốc đồng, vô kỷ luật.',
  },
  6: {
    title: 'Số 6: Người chăm sóc',
    desc: 'Bạn là người giàu tình yêu thương, trách nhiệm và luôn quan tâm đến gia đình. Bạn thích che chở người khác.',
    strengths: 'Bao dung, trách nhiệm, nghệ thuật, chữa lành.',
    weaknesses: 'Hay lo lắng, kiểm soát, hy sinh thái quá.',
  },
  7: {
    title: 'Số 7: Người tri thức',
    desc: 'Bạn là người sâu sắc, thích phân tích và tìm tòi chân lý. Bạn thường có xu hướng sống nội tâm.',
    strengths: 'Thông minh, phân tích sâu, trực giác, độc lập.',
    weaknesses: 'Cô độc, hay nghi ngờ, khó hiểu, xa cách.',
  },
  8: {
    title: 'Số 8: Người điều hành',
    desc: 'Bạn là người mạnh mẽ, độc lập và có khả năng lãnh đạo. Bạn khao khát thành công về vật chất và quyền lực.',
    strengths: 'Lãnh đạo, quyết đoán, quản lý tài chính, thực tế.',
    weaknesses: 'Thực dụng, độc đoán, lạnh lùng, áp đặt.',
  },
  9: {
    title: 'Số 9: Người nhân đạo',
    desc: 'Bạn là người có tấm lòng bao dung, vị tha và hướng tới cộng đồng. Bạn muốn làm cho thế giới tốt đẹp hơn.',
    strengths: 'Từ bi, sáng tạo, lãng mạn, hào phóng.',
    weaknesses: 'Mơ mộng thiếu thực tế, dễ bị lợi dụng.',
  },
  10: {
    title: 'Số 10: Người tiên phong',
    desc: 'Bạn là người độc lập, tự tin và có tố chất lãnh đạo bẩm sinh. Bạn thích đi đầu và tạo ra con đường riêng.',
    strengths: 'Tự tin, quyết đoán, sáng tạo, dũng cảm.',
    weaknesses: 'Cái tôi lớn, độc đoán, thiếu kiên nhẫn.',
  },
  11: {
    title: 'Số 11 (Master): Người khai sáng',
    desc: 'Bạn có trực giác tâm linh cực mạnh và khả năng truyền cảm hứng sâu sắc. Bạn nhạy cảm và tinh tế.',
    strengths: 'Trực giác, tâm linh, nhạy cảm, thấu cảm.',
    weaknesses: 'Dễ bị stress, mơ hồ, quá nhạy cảm.',
  },
  22: {
    title: 'Số 22 (Master): Kiến trúc sư đại tài',
    desc: 'Bạn có tầm nhìn lớn và khả năng biến những giấc mơ vĩ đại thành hiện thực. Bạn là sự kết hợp của số 4 và 11.',
    strengths: 'Tầm nhìn xa, thực thi giỏi, lãnh đạo, kiến tạo.',
    weaknesses: 'Áp lực lớn, tham vọng quá mức.',
  },
  33: {
    title: 'Số 33 (Master): Người chữa lành vĩ đại',
    desc: 'Con số hiếm gặp. Bạn mang tình yêu thương vô điều kiện và sứ mệnh chữa lành cho mọi người.',
    strengths: 'Bác ái, chữa lành, hướng thiện, hy sinh.',
    weaknesses: 'Gánh vác quá nhiều, quên bản thân.',
  },
};

@Injectable()
export class NumerologyHandler {
  
  private calculateLifePath(day: number, month: number, year: number): number {
    const reduce = (n: number): number => {
      let sum = n;
      while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
        sum = sum.toString().split('').reduce((a, b) => a + parseInt(b), 0);
      }
      return sum;
    };

    const daySum = reduce(day);
    const monthSum = reduce(month);
    const yearSum = reduce(year);

    let totalSum = daySum + monthSum + yearSum;
    
    while (totalSum > 9 && totalSum !== 11 && totalSum !== 22 && totalSum !== 33) {
      totalSum = totalSum.toString().split('').reduce((a, b) => a + parseInt(b), 0);
    }

    return totalSum;
  }

  @Command({ name: 'thanso', aliases: ['numerology'] })
  async onNumerology(
    @Args() args: Nezon.Args,
    @AutoContext() [message]: Nezon.AutoContext,
  ) {
    const input = args[0];
    if (!input) {
      await message.reply(SmartMessage.text('ℹ️ Vui lòng nhập ngày sinh. Ví dụ: `/thanso 15/05/2000`'));
      return;
    }

    const parts = input.match(/^(\d{1,2})[\/-](\d{1,2})[\/-](\d{4})$/);
    if (!parts) {
      await message.reply(SmartMessage.text('🚫 Định dạng ngày sai. Vui lòng dùng `DD/MM/YYYY`. Ví dụ: `15/05/2000`'));
      return;
    }

    const day = parseInt(parts[1], 10);
    const month = parseInt(parts[2], 10);
    const year = parseInt(parts[3], 10);

    if (day < 1 || day > 31 || month < 1 || month > 12) {
      await message.reply(SmartMessage.text('🚫 Ngày tháng không hợp lệ.'));
      return;
    }

    const lifePathNumber = this.calculateLifePath(day, month, year);
    const meaning = NUMEROLOGY_MEANINGS[lifePathNumber] || {
        title: `Số ${lifePathNumber}`,
        desc: 'Con số này rất đặc biệt và bí ẩn.',
        strengths: 'Đang cập nhật...',
        weaknesses: 'Đang cập nhật...',
    };

    const embed = new EmbedBuilder()
      .setTitle(`🔮 Thần Số Học: ${meaning.title}`)
      .setDescription(`**Ngày sinh:** ${day}/${month}/${year}\n**Con số chủ đạo:** ${lifePathNumber}\n\n${meaning.desc}`)
      .addField('💪 Điểm mạnh', meaning.strengths, false)
      .addField('⚠️ Điểm yếu', meaning.weaknesses, false)
      .setColor('#9B59B6')
      .setFooter('Hệ thống Pythagoras');

    await message.reply(SmartMessage.text('').addEmbed(embed));
  }
}
