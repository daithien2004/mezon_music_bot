import { Injectable } from '@nestjs/common';
import {
  Command,
  Args,
  AutoContext,
  SmartMessage,
  EmbedBuilder,
  Nezon,
} from '@n0xgg04/nezon';

@Injectable()
export class UtilityHandler {
  
  @Command({ name: 'qr', aliases: ['qrcode'] })
  async onQRCode(
    @Args() args: Nezon.Args,
    @AutoContext() [message]: Nezon.AutoContext,
  ) {
    const text = args.join(' ');
    
    if (!text) {
        await message.reply(SmartMessage.text('ℹ️ Vui lòng nhập nội dung muốn tạo QR. Ví dụ: `/qr Xin Chao`'));
        return;
    }

    // Use goqr.me API
    const encodedText = encodeURIComponent(text);
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodedText}`;

    const embed = new EmbedBuilder()
      .setTitle('📱 Mã QR của bạn')
      .setDescription(`Nội dung: ${text}`)
      .setImage(qrUrl)
      .setColor('#000000')
      .setFooter('Quét mã này bằng Camera hoặc Zalo');

    await message.reply(SmartMessage.text('').addEmbed(embed));
  }
}
