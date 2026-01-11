/**
 * Vietnamese translations for all 78 Tarot cards
 * Mapped from tarotapi.dev standard meanings
 */

export interface VietnameseCardMeaning {
  nameVI: string;
  keywords: string[];
  meaningUp: string;
  meaningRev: string;
}

export const VIETNAMESE_MEANINGS: Record<string, VietnameseCardMeaning> = {
  // =============================================================================
  // MAJOR ARCANA (22 cards)
  // =============================================================================
  
  'ar00': { // The Fool
    nameVI: 'Chàng Khờ',
    keywords: ['Khởi đầu mới', 'Ngây thơ', 'Tự do', 'Liều lĩnh'],
    meaningUp: 'Một khởi đầu mới đầy hứa hẹn. Hãy dũng cảm bước đi, tin vào trực giác và đừng sợ hãi những điều chưa biết. Bạn đang đứng trước một cơ hội tuyệt vời để làm lại từ đầu.',
    meaningRev: 'Sự liều lĩnh ngu ngốc, thiếu suy nghĩ cẩn thận. Bạn có thể đang quá ngây thơ hoặc đang trốn tránh trách nhiệm.',
  },
  
  'ar01': { // The Magician
    nameVI: 'Nhà Ảo Thuật',
    keywords: ['Sức mạnh', 'Kỹ năng', 'Hành động', 'Tập trung'],
    meaningUp: 'Bạn có đầy đủ nguồn lực và kỹ năng để đạt được mục tiêu. Đây là thời điểm để hành động và biến ý tưởng thành hiện thực.',
    meaningRev: 'Thiếu kế hoạch, lừa dối hoặc lạm dụng quyền lực. Bạn có thể đang do dự hoặc không tin vào khả năng của mình.',
  },
  
  'ar02': { // The High Priestess
    nameVI: 'Nữ Tu Tối Cao',
    keywords: ['Trực giác', 'Bí ẩn', 'Tiềm thức', 'Tĩnh lặng'],
    meaningUp: 'Hãy lắng nghe tiếng nói bên trong bạn. Trực giác của bạn đang rất mạnh mẽ. Có những điều bí mật sắp được hé lộ.',
    meaningRev: 'Bỏ qua trực giác, sống hời hợt hoặc có những bí mật bị che giấu gây hại. Hãy cẩn thận với những lời đồn đại.',
  },
  
  'ar03': { // The Empress
    nameVI: 'Nữ Hoàng',
    keywords: ['Mẹ thiên nhiên', 'Sự trù phú', 'Sáng tạo', 'Nuôi dưỡng'],
    meaningUp: 'Sự sinh sôi nảy nở, tài lộc và hạnh phúc gia đình. Một dự án sáng tạo hoặc một mối quan hệ đang phát triển tốt đẹp.',
    meaningRev: 'Sự phụ thuộc, thiếu sáng tạo hoặc gặp vấn đề trong gia đình. Cần chú ý chăm sóc bản thân nhiều hơn.',
  },
  
  'ar04': { // The Emperor
    nameVI: 'Hoàng Đế',
    keywords: ['Quyền lực', 'Cấu trúc', 'Ổn định', 'Bảo vệ'],
    meaningUp: 'Sự ổn định, kỷ luật và quyền lực. Bạn đang nắm quyền kiểm soát tình hình. Hãy sử dụng logic và lý trí để giải quyết vấn đề.',
    meaningRev: 'Sự độc đoán, lạm quyền hoặc thiếu kỷ luật. Cẩn thận với sự cứng nhắc quá mức gây áp lực cho người khác.',
  },
  
   'ar05': { // The Hierophant
    nameVI: 'Giáo Hoàng',
    keywords: ['Truyền thống', 'Niềm tin', 'Giáo dục', 'Đạo đức'],
    meaningUp: 'Tìm kiếm lời khuyên từ người có kinh nghiệm hoặc đi theo con đường truyền thống. Giá trị tinh thần và đạo đức được đề cao.',
    meaningRev: 'Phá vỡ quy tắc, thách thức hiện trạng hoặc cảm thấy bị gò bó bởi các định kiến xã hội.',
  },
  
  'ar06': { // The Lovers
    nameVI: 'Tình Nhân',
    keywords: ['Tình yêu', 'Sự lựa chọn', 'Hòa hợp', 'Hợp tác'],
    meaningUp: 'Tình yêu thăng hoa, sự hòa hợp trong các mối quan hệ. Bạn đang đứng trước một ngã rẽ quan trọng cần đưa ra lựa chọn từ trái tim.',
    meaningRev: 'Mâu thuẫn, chia rẽ hoặc lựa chọn sai lầm. Cẩn thận với những cám dỗ nhất thời.',
  },
  
  'ar07': { // The Chariot
    nameVI: 'Cỗ Xe Chiến',
    keywords: ['Chiến thắng', 'Ý chí', 'Kiểm soát', 'Tiến lên'],
    meaningUp: 'Thắng lợi nhờ sự kiên trì và ý chí sắt đá. Bạn đang tiến băng băng về phía trước. Hãy giữ vững tay lái.',
    meaningRev: 'Mất kiểm soát, hung hăng hoặc đi sai hướng. Cần bình tĩnh lại để xác định lại mục tiêu.',
  },
  
  'ar08': { // Strength
    nameVI: 'Sức Mạnh',
    keywords: ['Dũng cảm', 'Kiên nhẫn', 'Kiểm soát bản thân', 'Nhân từ'],
    meaningUp: 'Sức mạnh nội tại, lòng dũng cảm và sự kiên nhẫn. Bạn có thể vượt qua mọi thử thách bằng sự mềm mỏng nhưng cương quyết.',
    meaningRev: 'Yếu đuối, thiếu tự tin hoặc để nỗi sợ hãi chi phối. Hãy tin vào sức mạnh của chính mình.',
  },
  
  'ar09': { // The Hermit
    nameVI: 'Ẩn Sĩ',
    keywords: ['Cô độc', 'Suy ngẫm', 'Tìm kiếm', 'Nội tâm'],
    meaningUp: 'Thời gian để ở một mình và suy ngẫm. Hãy tạm rời xa ồn ào để tìm câu trả lời từ bên trong. Sự thông thái đến từ sự tĩnh lặng.',
    meaningRev: 'Sự cô lập không mong muốn, lẩn tránh xã hội hoặc từ chối lời khuyên hữu ích.',
  },
  
  'ar10': { // Wheel of Fortune  
    nameVI: 'Bánh Xe Số Phận',
    keywords: ['Thay đổi', 'May mắn', 'Chu kỳ', 'Định mệnh'],
    meaningUp: 'Vận may đang đến. Những thay đổi tích cực sắp xảy ra. Hãy nắm bắt cơ hội khi "bánh xe" quay đến vị trí tốt.',
    meaningRev: 'Vận xui, sự cố ngoài ý muốn hoặc cảm giác bất lực trước số phận. Hãy kiên nhẫn chờ đợi chu kỳ mới.',
  },
  
  'ar11': { // Justice
    nameVI: 'Công Lý',
    keywords: ['Công bằng', 'Sự thật', 'Luật pháp', 'Nhân quả'],
    meaningUp: 'Sự công bằng sẽ được thực thi. Mọi hành động đều có kết quả tương xứng. Hãy trung thực và minh bạch.',
    meaningRev: 'Bất công, thiếu minh bạch hoặc trốn tránh trách nhiệm. Coi chừng những rắc rối pháp lý.',
  },
  
  'ar12': { // The Hanged Man
    nameVI: 'Người Treo Ngược',
    keywords: ['Hy sinh', 'Góc nhìn mới', 'Chờ đợi', 'Buông bỏ'],
    meaningUp: 'Cần một khoảng lặng hoặc chấp nhận hy sinh để đạt được mục tiêu lớn hơn. Hãy thay đổi góc nhìn để thấy giải pháp.',
    meaningRev: 'Sự trì hoãn vô ích, cố chấp hoặc đóng vai nạn nhân. Cần hành động thay vì chỉ chờ đợi.',
  },
  
  'ar13': { // Death
    nameVI: 'Tử Thần',
    keywords: ['Kết thúc', 'Chuyển hóa', 'Buông bỏ', 'Thay đổi lớn'],
    meaningUp: 'Một sự kết thúc cần thiết để mở ra cánh cửa mới. Đừng sợ thay đổi, hãy buông bỏ quá khứ để tái sinh.',
    meaningRev: 'Sợ thay đổi, níu kéo quá khứ hoặc rơi vào trạng thái trì trệ. Sự thay đổi là tất yếu, hãy chấp nhận nó.',
  },
  
  'ar14': { // Temperance
    nameVI: 'Cân Bằng',
    keywords: ['Cân bằng', 'Điều độ', 'Kiên nhẫn', 'Hòa hợp'],
    meaningUp: 'Sự cân bằng và hài hòa. Hãy kiên nhẫn và tránh những hành động cực đoan. Học cách thỏa hiệp để đạt được bình yên.',
    meaningRev: 'Mất cân bằng, thiếu kiên nhẫn hoặc xung đột. Cần điều chỉnh lại lối sống và cảm xúc.',
  },
  
  'ar15': { // The Devil
    nameVI: 'Ác Quỷ',
    keywords: ['Ràng buộc', 'Cám dỗ', 'Vật chất', 'Nghiện ngập'],
    meaningUp: 'Bị trói buộc bởi những ham muốn vật chất hoặc thói quen xấu. Cảm giác mất tự do nhưng thực chất là do chính bạn tạo ra.',
    meaningRev: 'Giải thoát khỏi sự kìm kẹp, nhận ra sự thật và bắt đầu thay đổi tích cực.',
  },
  
  'ar16': { // The Tower
    nameVI: 'Tòa Tháp',
    keywords: ['Đổ vỡ', 'Bất ngờ', 'Thức tỉnh', 'Hỗn loạn'],
    meaningUp: 'Sự thay đổi đột ngột, có thể gây sốc nhưng cần thiết để phá bỏ những nền tảng sai lầm. Sau cơn mưa trời lại sáng.',
    meaningRev: 'Sợ hãi trước thay đổi, cố gắng cứu vãn những gì đã sụp đổ. Hãy chấp nhận sự thật.',
  },
  
  'ar17': { // The Star
    nameVI: 'Ngôi Sao',
    keywords: ['Hy vọng', 'Cảm hứng', 'Bình yên', 'Hồi phục'],
    meaningUp: 'Ánh sáng của hy vọng và sự chữa lành. Tương lai tươi sáng đang chờ đón. Hãy giữ vững niềm tin.',
    meaningRev: 'Mất niềm tin, thất vọng hoặc cảm th thấy lạc lõng. Hãy tìm lại nguồn cảm hứng của mình.',
  },
  
  'ar18': { // The Moon
    nameVI: 'Mặt Trăng',
    keywords: ['Ảo tưởng', 'Sợ hãi', 'Tiềm thức', 'Mơ hồ'],
    meaningUp: 'Mọi thứ không như vẻ bề ngoài. Trực giác mạnh nhưng cũng dễ bị ảo tưởng. Cẩn thận với sự lừa dối hoặc nỗi sợ vô hình.',
    meaningRev: 'Sự thật được phơi bày, thoát khỏi nỗi sợ hãi hoặc sự nhầm lẫn.',
  },
  
  'ar19': { // The Sun
    nameVI: 'Mặt Trời',
    keywords: ['Niềm vui', 'Thành công', 'Rạng rỡ', 'Năng lượng'],
    meaningUp: 'Thành công rực rỡ, niềm vui và hạnh phúc. Mọi thứ đều rõ ràng và tích cực. Hãy tận hưởng khoảnh khắc này.',
    meaningRev: 'Niềm vui bị trì hoãn hoặc quá tự tin dẫn đến kiêu ngạo. Tuy nhiên, vẫn là một lá bài tích cực.',
  },
  
  'ar20': { // Judgment
    nameVI: 'Phán Xét',
    keywords: ['Thức tỉnh', 'Đánh giá', 'Tái sinh', 'Tiếng gọi'],
    meaningUp: 'Thời điểm để đánh giá lại quá khứ và đưa ra quyết định quan trọng. Một sự thức tỉnh tâm linh hoặc một cơ hội thứ hai.',
    meaningRev: 'Thiếu quyết đoán, chối bỏ sự thật hoặc hối tiếc về quá khứ.',
  },
  
  'ar21': { // The World
    nameVI: 'Thế Giới',
    keywords: ['Hoàn thành', 'Thành tựu', 'Du lịch', 'Trọn vẹn'],
    meaningUp: 'Sự hoàn thành trọn vẹn của một chu kỳ. Thành công đỉnh cao và sự hài lòng. Thế giới đang mở rộng trước mắt bạn.',
    meaningRev: 'Sự dang dở, trì hoãn hoặc cảm giác thiếu sót điều gì đó. Cần nỗ lực thêm chút nữa để về đích.',
  },

  // =============================================================================
  // MINOR ARCANA - WANDS (Gậy) - 14 cards
  // =============================================================================
  
  'waac': { // Ace of Wands
    nameVI: 'Át Gậy',
    keywords: ['Cảm hứng', 'Cơ hội mới', 'Đam mê', 'Tiềm năng'],
    meaningUp: 'Một nguồn năng lượng mới, cảm hứng sáng tạo bùng nổ. Hãy nắm bắt cơ hội này.',
    meaningRev: 'Thiếu động lực, trì hoãn hoặc ý tưởng không thực tế.',
  },
  
  'wa02': { // Two of Wands
    nameVI: 'Hai Gậy',
    keywords: ['Kế hoạch', 'Tầm nhìn', 'Ra quyết định', 'Khám phá'],
    meaningUp: 'Bạn đang đứng tại ngã ba đường với nhiều khả năng phía trước. Hãy lập kế hoạch và chọn hướng đi phù hợp.',
    meaningRev: 'Sợ hãi, thiếu kế hoạch hoặc bị giới hạn trong vùng an toàn.',
  },
  
  'wa03': { // Three of Wands
    nameVI: 'Ba Gậy',
    keywords: ['Mở rộng', 'Tầm nhìn xa', 'Dự đoán', 'Lãnh đạo'],
    meaningUp: 'Những kế hoạch của bạn đang tiến triển tốt. Đã đến lúc mở rộng tầm mắt và hướng tới những mục tiêu lớn hơn.',
    meaningRev: 'Thiếu tầm nhìn, trì hoãn hoặc kế hoạch gặp trở ngại.',
  },
  
  'wa04': { // Four of Wands
    nameVI: 'Bốn Gậy',
    keywords: ['Ăn mừng', 'Hòa hợp', 'Nhà', 'Thành tựu'],
    meaningUp: 'Thời gian để ăn mừng những thành tựu và tận hưởng sự ổn định. Hạnh phúc gia đình và cộng đồng.',
    meaningRev: 'Thiếu ổn định, mất cảm giác về nhà hoặc khủng hoảng cá nhân.',
  },
  
  'wa05': { // Five of Wands
    nameVI: 'Năm Gậy',
    keywords: ['Xung đột', 'Cạnh tranh', 'Căng thẳng', 'Bất đồng'],
    meaningUp: 'Sự cạnh tranh và tranh giành. Nhiều ý kiến khác nhau cần được hòa giải.',
    meaningRev: 'Tránh xung đột, đầu hàng hoặc tìm được sự hòa giải.',
  },
  
  'wa06': { // Six of Wands
    nameVI: 'Sáu Gậy',
    keywords: ['Chiến thắng', 'Công nhận', 'Tự hào', 'Thành công công khai'],
    meaningUp: 'Chiến thắng rực rỡ được công nhận. Bạn đang nhận được sự tôn trọng và ca ngợi xứng đáng.',
    meaningRev: 'Tự phụ, thất bại hoặc thiếu sự công nhận.',
  },
  
  'wa07': { // Seven of Wands
    nameVI: 'Bảy Gậy',
    keywords: ['Bảo vệ', 'Kiên định', 'Thách thức', 'Lợi thế'],
    meaningUp: 'Bạn đang đối mặt với nhiều thách thức nhưng hãy kiên định. Bạn có lợi thế để bảo vệ vị trí của mình.',
    meaningRev: 'Bị áp đảo, mất tự tin hoặc từ bỏ cuộc chiến.',
  },
  
  'wa08': { // Eight of Wands
    nameVI: 'Tám Gậy',
    keywords: ['Tốc độ', 'Chuyển động', 'Tin tức', 'Tiến triển nhanh'],
    meaningUp: 'Mọi thứ đang di chuyển nhanh chóng. Tin tức tốt đang đến và các sự kiện diễn ra liên tiếp.',
    meaningRev: 'Trì hoãn, cản trở hoặc vội vàng gây sai lầm.',
  },
  
  'wa09': { // Nine of Wands
    nameVI: 'Chín Gậy',
    keywords: ['Kiên cường', 'Kiên trì', 'Biên giới', 'Phòng thủ'],
    meaningUp: 'Bạn đã vượt qua nhiều thử thách và gần đến đích. Hãy kiên trì một chút nữa.',
    meaningRev: 'Kiệt sức, đầu hàng hoặc sợ hãi trước thử thách cuối cùng.',
  },
  
  'wa10': { // Ten of Wands
    nameVI: 'Mười Gậy',
    keywords: ['Gánh nặng', 'Áp lực', 'Trách nhiệm', 'Căng thẳng'],
    meaningUp: 'Bạn đang gánh vác quá nhiều trách nhiệm. Áp lực lớn nhưng đích đến đã gần kề.',
    meaningRev: 'Buông bỏ bớt gánh nặng, chia sẻ công việc hoặc sụp đổ vì áp lực.',
  },
  
  'wapa': { // Page of Wands
    nameVI: 'Cận Vệ Gậy',
    keywords: ['Khám phá', 'Nhiệt huyết', 'Tin tức', 'Tò mò'],
    meaningUp: 'Một thông điệp hoặc cơ hội mới đầy hứng khởi. Hãy khám phá với trái tim dũng cảm.',
    meaningRev: 'Thiếu hướng đi, không kiên nhẫn hoặc tin xấu.',
  },
  
  'wakn': { // Knight of Wands
    nameVI: 'Hiệp Sĩ Gậy',
    keywords: ['Hành động', 'Mạo hiểm', 'Tự tin', 'Bốc đồng'],
    meaningUp: 'Năng lượng bùng nổ và tinh thần phiêu lưu. Hành động mạnh mẽ và quyết đoán.',
    meaningRev: 'Thiếu kiên nhẫn, liều lĩnh hoặc thiếu kế hoạch.',
  },
  
  'waqu': { // Queen of Wands
    nameVI: 'Nữ Hoàng Gậy',
    keywords: ['Tự tin', 'Nhiệt tình', 'Quyến rũ', 'Độc lập'],
    meaningUp: 'Người phụ nữ mạnh mẽ, tự tin và tràn đầy năng lượng. Lãnh đạo với nhiệt huyết.',
    meaningRev: 'Ghen tuông, kiểm soát hoặc thiếu tự tin.',
  },
  
  'waki': { // King of Wands
    nameVI: 'Vua Gậy',
    keywords: ['Lãnh đạo tự nhiên', 'Tầm nhìn', 'Doanh nhân', 'Trung thực'],
    meaningUp: 'Nhà lãnh đạo có tầm nhìn và lòng dũng cảm. Quyết đoán và trung thực trong hành động.',
    meaningRev: 'Độc đoán, hung hãn hoặc lạm dụng quyền lực.',
  },

  // =============================================================================
  // MINOR ARCANA - CUPS (Ly) - 14 cards
  // =============================================================================
  
  'cuac': { // Ace of Cups
    nameVI: 'Át Ly',
    keywords: ['Tình yêu mới', 'Cảm xúc', 'Trực giác', 'Sáng tạo'],
    meaningUp: 'Một khởi đầu mới đầy cảm xúc. Tình yêu nảy nở hoặc một nguồn cảm hứng sáng tạo dồi dào.',
    meaningRev: 'Cảm xúc bị kìm nén, thất vọng hoặc tin xấu về tình cảm.',
  },
  
  'cu02': { // Two of Cups
    nameVI: 'Hai Ly',
    keywords: ['Kết nối', 'Tình yêu', 'Đối tác', 'Hòa hợp'],
    meaningUp: 'Sự kết nối sâu sắc giữa hai người. Tình yêu đôi lứa hoặc sự hợp tác ăn ý.',
    meaningRev: 'Mất cân bằng trong mối quan hệ, hiểu lầm hoặc chia rẽ.',
  },
  
  'cu03': { // Three of Cups
    nameVI: 'Ba Ly',
    keywords: ['Ăn mừng', 'Tình bạn', 'Cộng đồng', 'Vui vẻ'],
    meaningUp: 'Thời gian để ăn mừng và tụ họp với bạn bè. Niềm vui được chia sẻ là niềm vui nhân đôi.',
    meaningRev: 'Tiệc tùng quá đà, cô lập hoặc có người thứ ba xen vào.',
  },
  
  'cu04': { // Four of Cups
    nameVI: 'Bốn Ly',
    keywords: ['Trầm ngâm', 'Chán nản', 'Cơ hội bỏ lỡ', 'Nội tâm'],
    meaningUp: 'Cảm giác chán nản hoặc không hài lòng với những gì đang có. Có thể bỏ lỡ cơ hội mới.',
    meaningRev: 'Nhận ra cơ hội mới, tỉnh ngộ hoặc ước lọng.',
  },
  
  'cu05': { // Five of Cups
    nameVI: 'Năm Ly',
    keywords: ['Mất mát', 'Hối tiếc', 'Thất vọng', 'Bi quan'],
    meaningUp: 'Tập trung vào những gì đã mất thay vì những gì còn lại. Cần học cách buông bỏ và nhìn về phía trước.',
    meaningRev: 'Chấp nhận, tha thứ hoặc bắt đầu hồi phục sau mất mát.',
  },
  
  'cu06': { // Six of Cups
    nameVI: 'Sáu Ly',
    keywords: ['Kỷ niệm', 'Tuổi thơ', 'Hoài niệm', 'Quá khứ'],
    meaningUp: 'Nhớ về quá khứ đẹp đẽ. Có thể gặp lại người cũ hoặc tái kết nối với gốc rễ.',
    meaningRev: 'Sống trong quá khứ, bỏ lỡ hiện tại hoặc níu kéo điều đã qua.',
  },
  
  'cu07': { // Seven of Cups
    nameVI: 'Bảy Ly',
    keywords: ['Ảo tưởng', 'Lựa chọn', 'Mơ mộng', 'Bối rối'],
    meaningUp: 'Quá nhiều lựa chọn dẫn đến bối rối. Cẩn thận với những ảo tưởng và giấc mơ không thực tế.',
    meaningRev: 'Rõ ràng, quyết đoán hoặc nhận ra sự thật.',
  },
  
  'cu08': { // Eight of Cups
    nameVI: 'Tám Ly',
    keywords: ['Bỏ lại', 'Tìm kiếm', 'Rút lui', 'Chuyển đổi'],
    meaningUp: 'Rời bỏ những gì không còn phục vụ bạn để tìm kiếm ý nghĩa sâu sắc hơn. Hành trình tâm linh.',
    meaningRev: 'Sợ hãi rời đi, trốn tránh hoặc quay lại quá khứ.',
  },
  
  'cu09': { // Nine of Cups
    nameVI: 'Chín Ly',
    keywords: ['Mãn nguyện', 'Hạnh phúc', 'Ước nguyện thành hiện thực', 'Thỏa mãn'],
    meaningUp: 'Sự thỏa mãn và hạnh phúc. Ước nguyện của bạn đang thành hiện thực. Tận hưởng thành quả.',
    meaningRev: 'Tham lam, ngạo nghễ hoặc hạnh phúc ảo tưởng.',
  },
  
  'cu10': { // Ten of Cups
    nameVI: 'Mười Ly',
    keywords: ['Hạnh phúc viên mãn', 'Gia đình', 'Hòa hợp', 'Bình yên'],
    meaningUp: 'Hạnh phúc gia đình trọn vẹn. Mọi mong ước về tình cảm đều thành hiện thực.',
    meaningRev: 'Mâu thuẫn gia đình, giá trị bị đảo lộn hoặc hạnh phúc ảo tưởng.',
  },
  
  'cupa': { // Page of Cups
    nameVI: 'Cận Vệ Ly',
    keywords: ['Sáng tạo', 'Nhạy cảm', 'Tin tức về tình cảm', 'Trực giác'],
    meaningUp: 'Thông điệp về tình cảm hoặc cơ hội sáng tạo mới. Đừng ngại thể hiện cảm xúc của bạn.',
    meaningRev: 'Chưa trưởng thành về cảm xúc, không thực tế hoặc tin xấu.',
  },
  
  'cukn': { // Knight of Cups
    nameVI: 'Hiệp Sĩ Ly',
    keywords: ['Lãng mạn', 'Quyến rũ', 'Lý tưởng hóa', 'Đề nghị'],
    meaningUp: 'Người mang đến lời mời chào hoặc đề nghị lãng mạn. Theo đuổi ước mơ bằng trái tim.',
    meaningRev: 'Không thực tế, gian dối hoặc thất vọng về tình cảm.',
  },
  
  'cuqu': { // Queen of Cups
    nameVI: 'Nữ Hoàng Ly',
    keywords: ['Đồng cảm', 'Chăm sóc', 'Trực giác', 'Nhạy cảm'],
    meaningUp: 'Người phụ nữ giàu lòng thương, đồng cảm và có trực giác mạnh mẽ. Chăm sóc người khác.',
    meaningRev: 'Phụ thuộc cảm xúc, thao túng hoặc không ổn định.',
  },
  
  'cuki': { // King of Cups
    nameVI: 'Vua Ly',
    keywords: ['Cân bằng cảm xúc', 'Khôn ngoan', 'Điềm tĩnh', 'Ngoại giao'],
    meaningUp: 'Kiểm soát cảm xúc tốt, khôn ngoan và từ bi. Lãnh đạo bằng trái tim và lý trí.',
    meaningRev: 'Lạnh lùng, thao túng hoặc không ổn định cảm xúc.',
  },

  // =============================================================================
  // MINOR ARCANA - SWORDS (Kiếm) - 14 cards
  // =============================================================================
  
  'swac': { // Ace of Swords
    nameVI: 'Át Kiếm',
    keywords: ['Đột phá', 'Sự thật', 'Rõ ràng', 'Trí tuệ'],
    meaningUp: 'Một ý tưởng đột phá, sự thật được phơi bày. Tư duy sắc bén giúp giải quyết vấn đề.',
    meaningRev: 'Nhầm lẫn, hỗn loạn hoặc lời nói gây tổn thương.',
  },
  
  'sw02': { // Two of Swords
    nameVI: 'Hai Kiếm',
    keywords: ['Bế tắc', 'Khó quyết định', 'Tránh né', 'Cân bằng bấp bênh'],
    meaningUp: 'Khó khăn trong việc đưa ra quyết định. Bạn đang tránh né sự thật hoặc phải chọn giữa hai lựa chọn khó khăn.',
    meaningRev: 'Ra quyết định, sự thật được hé lộ hoặc mở lòng.',
  },
  
  'sw03': { // Three of Swords
    nameVI: 'Ba Kiếm',
    keywords: ['Đau khổ', 'Thất tình', 'Phản bội', 'Bi thương'],
    meaningUp: 'Nỗi đau thật sự thườ thường từ chia ly, phản bội hoặc mất mát. Cần thời gian để lành vết thương.',
    meaningRev: 'Bắt đầu chữa lành, tha thứ hoặc vượt qua nỗi đau.',
  },
  
  'sw04': { // Four of Swords
    nameVI: 'Bốn Kiếm',
    keywords: ['Nghỉ ngơi', 'Hồi phục', 'Trầm tư', 'Tĩnh lặng'],
    meaningUp: 'Cần thời gian nghỉ ngơi và hồi phục. Tạm dừng để suy nghĩ và tái tạo năng lượng.',
    meaningRev: 'Kiệt sức, không nghỉ ngơi đủ hoặc trì hoãn hồi phục.',
  },
  
  'sw05': { // Five of Swords
    nameVI: 'Năm Kiếm',
    keywords: ['Xung đột', 'Đánh bại', 'Thất bại', 'Bất công'],
    meaningUp: 'Chiến thắng nhưng phải trả giá đắt. Xung đột không có người thắng thật sự.',
    meaningRev: 'Hòa giải, buông bỏ kiêu họ hoặc chấp nhận thất bại.',
  },
  
  'sw06': { // Six of Swords
    nameVI: 'Sáu Kiếm',
    keywords: ['Chuyển tiếp', 'Di chuyển', 'Rời bỏ', 'Hồi phục'],
    meaningUp: 'Rời bỏ khó khăn phía sau và di chuyển về phía trước. Một hành trình chữa lành.',
    meaningRev: 'Mắc kẹt, không thể tiến lên hoặc chuyển tiếp bị trì hoãn.',
  },
  
  'sw07': { // Seven of Swords
    nameVI: 'Bảy Kiếm',
    keywords: ['Lừa dối', 'Chiến thuật', 'Trốn tránh', 'Thận trọng'],
    meaningUp: 'Sự lén lút hoặc chiến thuật khôn khéo. Cẩn thận với sự lừa dối xung quanh.',
    meaningRev: 'Bị bố phát hiện, cảm giác tội lỗi hoặc thú nhận sự thật.',
  },
  
  'sw08': { // Eight of Swords
    nameVI: 'Tám Kiếm',
    keywords: ['Bế tắc', 'Giới hạn', 'Nạn nhân', 'Sợ hãi'],
    meaningUp: 'Cảm giác bị mắc kẹt và bất lực. Tuy nhiên, những ràng buộc này phần lớn do tự bạn tạo ra.',
    meaningRev: 'Giải phóng, thoát khỏi giới hạn hoặc vượt qua nỗi sợ.',
  },
  
  'sw09': { // Nine of Swords
    nameVI: 'Chín Kiếm',
    keywords: ['Lo lắng', 'Ác mộng', 'Sợ hãi', 'Tội lỗi'],
    meaningUp: 'Căng thẳng tâm lý, lo lắng và mất ngủ. Những sợ hãi thường lớn hơn thực tế.',
    meaningRev: 'Hy vọng, hồi phục hoặc tìm kiếm sự giúp đỡ.',
  },
  
  'sw10': { // Ten of Swords
    nameVI: 'Mười Kiếm',
    keywords: ['Kết thúc đau đớn', 'Phản bội', 'Thất bại', 'Đáy vực'],
    meaningUp: 'Sự kết thúc đau thương nhưng dứt khoát. Bạn đã chạm đáy và chỉ có thể đi lên từ đây.',
    meaningRev: 'Đang dần hồi phục, vết thương bắt đầu lành nhưng vẫn còn ám ảnh.',
  },
  
  'swpa': { // Page of Swords
    nameVI: 'Cận Vệ Kiếm',
    keywords: ['Tò mò', 'Tin tức', 'Theo dõi', 'Phân tích'],
    meaningUp: 'Tin tức hoặc thông tin mới. Sự tò mò và mong muốn học hỏi.',
    meaningRev: 'Tin đồn, gián điệp hoặc thông tin sai lệch.',
  },
  
  'swkn': { // Knight of Swords
    nameVI: 'Hiệp Sĩ Kiếm',
    keywords: ['Hành động nhanh', 'Quyết đoán', 'Trực tiếp', 'Gay gắt'],
    meaningUp: 'Hành động quyết liệt và trực tiếp. Nhanh chóng nhưng có thể thiếu thận trọng.',
    meaningRev: 'Bốc đồng, hung hãn hoặc thiếu kế hoạch.',
  },
  
  'swqu': { // Queen of Swords
    nameVI: 'Nữ Hoàng Kiếm',
    keywords: ['Độc lập', 'Thông minh', 'Trực tiếp', 'Công bằng'],
    meaningUp: 'Người phụ nữ độc lập, thông minh và trực tiếp. Đưa ra quyết định dựa trên lý trí.',
    meaningRev: 'Lạnh lùng, cay độc hoặc thao túng.',
  },
  
  'swki': { // King of Swords
    nameVI: 'Vua Kiếm',
    keywords: ['Trí tuệ', 'Quyền uy', 'Sự thật', 'Công lý'],
    meaningUp: 'Nhà lãnh đạo sáng suốt, ra quyết định dựa trên logic and công lý. Tìm kiếm sự thật.',
    meaningRev: 'Độc đoán, lạm quyền hoặc lạnh lùng không có lòng thương.',
  },

  // =============================================================================
  // MINOR ARCANA - PENTACLES (Tiền/Xu) - 14 cards
  // =============================================================================
  
  'peac': { // Ace of Pentacles
    nameVI: 'Át Tiền',
    keywords: ['Cơ hội mới', 'Tài lộc', 'Thịnh vượng', 'Ổn định'],
    meaningUp: 'Cơ hội tài chính mới hoặc một khởi đầu vững chắc cho sự nghiệp. Tiền bạc đang đến.',
    meaningRev: 'Cơ hội bị bỏ lỡ, chi tiêu hoang phí hoặc đầu tư kém hiệu quả.',
  },
  
  'pe02': { // Two of Pentacles
    nameVI: 'Hai Tiền',
    keywords: ['Cân bằng', 'Ưu tiên', 'Thích nghi', 'Linh hoạt'],
    meaningUp: 'Đang cân bằng nhiều trách nhiệm. Cần linh hoạt và ưu tiên khôn ngoan.',
    meaningRev: 'Mất cân bằng, quá tải hoặc thất bại trong quản lý.',
  },
  
  'pe03': { // Three of Pentacles
    nameVI: 'Ba Tiền',
    keywords: ['Hợp tác', 'Kỹ năng', 'Làm việc nhóm', 'Học hỏi'],
    meaningUp: 'Hợp tác thành công, kỹ năng được công nhận. Làm việc nhóm mang lại kết quả tốt.',
    meaningRev: 'Thiếu hợp tác, va chạm nhóm hoặc thiếu chuyên môn.',
  },
  
  'pe04': { // Four of Pentacles
    nameVI: 'Bốn Tiền',
    keywords: ['Kiểm soát', 'Bảo vệ', 'Bảo thủ', 'An toàn'],
    meaningUp: 'Muốn kiểm soát và bảo vệ tài sản. Có thể quá keo kiệt hoặc sợ mất mát.',
    meaningRev: 'Tham lam, cứng nhắc hoặc bắt đầu hào phóng.',
  },
  
  'pe05': { // Five of Pentacles
    nameVI: 'Năm Tiền',
    keywords: ['Khó khăn tài chính', 'Mất mát', 'Nghèo khó', 'Cô đơn'],
    meaningUp: 'Khó khăn về tài chính hoặc sức khỏe. Cảm giác bị bỏ rơi nhưng sự giúp đỡ đang ở gần.',
    meaningRev: 'Hồi phục, cải thiện hoặc chấp nhận sự giúp đỡ.',
  },
  
  'pe06': { // Six of Pentacles
    nameVI: 'Sáu Tiền',
    keywords: ['Hào phóng', 'Từ thiện', 'Cho và nhận', 'Công bằng'],
    meaningUp: 'Hào phóng và chia sẻ nguồn lực. Cân bằng giữa cho đi và nhận lại.',
    meaningRev: 'Ích kỷ, nợ nần hoặc phụ thuộc vào người khác.',
  },
  
  'pe07': { // Seven of Pentacles
    nameVI: 'Bảy Tiền',
    keywords: ['Kiên nhẫn', 'Đánh giá', 'Đầu tư dài hạn', 'Chờ đợi'],
    meaningUp: 'Đánh giá tiến độ và kiên nhẫn chờ kết quả. Đầ tư dài hạn cần thời gian.',
    meaningRev: 'Thiếu kiên nhẫn, mất phương hướng hoặc không có tiến triển.',
  },
  
  'pe08': { // Eight of Pentacles
    nameVI: 'Tám Tiền',
    keywords: ['Chăm chỉ', 'Kỹ năng', 'Cống hiến', 'Thành thạo'],
    meaningUp: 'Làm việc chăm chỉ để hoàn thiện kỹ năng. Sự cống hiến mang lại thành công.',
    meaningRev: 'Thiếu tập trung, hoàn thiện kém hoặc làm việc vô nghĩa.',
  },
  
  'pe09': { // Nine of Pentacles
    nameVI: 'Chín Tiền',
    keywords: ['Độc lập tài chính', 'Sang trọng', 'Tự truyền', 'Thành công'],
    meaningUp: 'Thành công tự tạo, độc lập tài chính và tận hưởng cuộc sống. Phần thưởng xứng đáng.',
    meaningRev: 'Phụ thuộc, thiếu kỷ luật hoặc xa hoa quá mức.',
  },
  
  'pe10': { // Ten of Pentacles
    nameVI: 'Mười Tiền',
    keywords: ['Giàu có', 'Di sản', 'Gia đình', 'Ổn định lâu dài'],
    meaningUp: 'Sự thịnh vượng bền vững, tài sản gia đình và sự an toàn về tài chính.',
    meaningRev: 'Tranh chấp tài sản, thua lỗ hoặc gánh nặng gia đình.',
  },
  
  'pepa': { // Page of Pentacles
    nameVI: 'Cận Vệ Tiền',
    keywords: ['Cơ hội mới', 'Học hỏi', 'Tham vọng', 'Tin tài chính'],
    meaningUp: 'Tin tức về tài chính hoặc cơ hội học tập mới. Sự nhiệt tình và tham vọng.',
    meaningRev: 'Lười biếng, thiếu tập trung hoặc tin xấu về tài chính.',
  },
  
  'pekn': { // Knight of Pentacles
    nameVI: 'Hiệp Sĩ Tiền',
    keywords: ['Chăm chỉ', 'Đáng tin', 'Thận trọng', 'Trách nhiệm'],
    meaningUp: 'Làm việc kiên trì và đáng tin cậy. Tiến độ chậm nhưng ổn định.',
    meaningRev: 'Chậm chạp, nhàm chán hoặc quá thận trọng.',
  },
  
  'pequ': { // Queen of Pentacles
    nameVI: 'Nữ Hoàng Tiền',
    keywords: ['Nuôi dưỡng', 'Thực tế', 'Hào phóng', 'An toàn'],
    meaningUp: 'Người phụ nữ thực tế, chăm sóc gia đình và có khả năng tài chính tốt. Cân bằng giữa sự nghiệp và gia đình.',
    meaningRev: 'Quá bận rộn, vật chất hóa hoặc lơ là bản thân.',
  },
  
  'peki': { // King of Pentacles
    nameVI: 'Vua Tiền',
    keywords: ['Thành công', 'Thịnh vượng', 'Lãnh đạo', 'Kinh doanh'],
    meaningUp: 'Thành công trong kinh doanh và tài chính. Lãnh đạo thực tế và đáng tin cậy.',
    meaningRev: 'Tham lam, lạm dụng quyền lực hoặc không đạt mục tiêu.',
  },
};
