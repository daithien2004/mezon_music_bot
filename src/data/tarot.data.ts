export interface TarotCard {
  id: string; // ID dùng để map ảnh (ar00 -> The Fool)
  name: string; // Tên gốc tiếng Anh
  nameVI: string; // Tên tiếng Việt
  keywords: string[]; // Từ khóa chính
  meaningUp: string; // Ý nghĩa xuôi
  meaningRev: string; // Ý nghĩa ngược
  suit?: 'major' | 'wands' | 'cups' | 'swords' | 'pentacles';
}

export const TAROT_DECK: TarotCard[] = [
  // --- MAJOR ARCANA (22 Lá Ẩn Chính) ---
  {
    id: 'ar00',
    name: 'The Fool',
    nameVI: 'Chàng Khờ',
    keywords: ['Khởi đầu mới', 'Ngây thơ', 'Tự do', 'Liều lĩnh'],
    meaningUp: 'Một khởi đầu mới đầy hứa hẹn. Hãy dũng cảm bước đi, tin vào trực giác và đừng sợ hãi những điều chưa biết. Bạn đang đứng trước một cơ hội tuyệt vời để làm lại từ đầu.',
    meaningRev: 'Sự liều lĩnh ngu ngốc, thiếu suy nghĩ cẩn thận. Bạn có thể đang quá ngây thơ hoặc đang trốn tránh trách nhiệm.',
    suit: 'major'
  },
  {
    id: 'ar01',
    name: 'The Magician',
    nameVI: 'Nhà Ảo Thuật',
    keywords: ['Sức mạnh', 'Kỹ năng', 'Hành động', 'Tập trung'],
    meaningUp: 'Bạn có đầy đủ nguồn lực và kỹ năng để đạt được mục tiêu. Đây là thời điểm để hành động và biến ý tưởng thành hiện thực.',
    meaningRev: 'Thiếu kế hoạch, lừa dối hoặc lạm dụng quyền lực. Bạn có thể đang do dự hoặc không tin vào khả năng của mình.',
    suit: 'major'
  },
  {
    id: 'ar02',
    name: 'The High Priestess',
    nameVI: 'Nữ Tu Tối Cao',
    keywords: ['Trực giác', 'Bí ẩn', 'Tiềm thức', 'Tĩnh lặng'],
    meaningUp: 'Hãy lắng nghe tiếng nói bên trong bạn. Trực giác của bạn đang rất mạnh mẽ. Có những điều bí mật sắp được hé lộ.',
    meaningRev: 'Bỏ qua trực giác, sống hời hợt hoặc có những bí mật bị che giấu gây hại. Hãy cẩn thận với những lời đồn đại.',
    suit: 'major'
  },
  {
    id: 'ar03',
    name: 'The Empress',
    nameVI: 'Nữ Hoàng',
    keywords: ['Mẹ thiên nhiên', 'Sự trù phú', 'Sáng tạo', 'Nuôi dưỡng'],
    meaningUp: 'Sự sinh sôi nảy nở, tài lộc và hạnh phúc gia đình. Một dự án sáng tạo hoặc một mối quan hệ đang phát triển tốt đẹp.',
    meaningRev: 'Sự phụ thuộc, thiếu sáng tạo hoặc gặp vấn đề trong gia đình. Cần chú ý chăm sóc bản thân nhiều hơn.',
    suit: 'major'
  },
  {
    id: 'ar04',
    name: 'The Emperor',
    nameVI: 'Hoàng Đế',
    keywords: ['Quyền lực', 'Cấu trúc', 'Ổn định', 'Bảo vệ'],
    meaningUp: 'Sự ổn định, kỷ luật và quyền lực. Bạn đang nắm quyền kiểm soát tình hình. Hãy sử dụng logic và lý trí để giải quyết vấn đề.',
    meaningRev: 'Sự độc đoán, lạm quyền hoặc thiếu kỷ luật. Cẩn thận với sự cứng nhắc quá mức gây áp lực cho người khác.',
    suit: 'major'
  },
  {
    id: 'ar05',
    name: 'The Hierophant',
    nameVI: 'Giáo Hoàng',
    keywords: ['Truyền thống', 'Niềm tin', 'Giáo dục', 'Đạo đức'],
    meaningUp: 'Tìm kiếm lời khuyên từ người có kinh nghiệm hoặc đi theo con đường truyền thống. Giá trị tinh thần và đạo đức được đề cao.',
    meaningRev: 'Phá vỡ quy tắc, thách thức hiện trạng hoặc cảm thấy bị gò bó bởi các định kiến xã hội.',
    suit: 'major'
  },
  {
    id: 'ar06',
    name: 'The Lovers',
    nameVI: 'Tình Nhân',
    keywords: ['Tình yêu', 'Sự lựa chọn', 'Hòa hợp', 'Hợp tác'],
    meaningUp: 'Tình yêu thăng hoa, sự hòa hợp trong các mối quan hệ. Bạn đang đứng trước một ngã rẽ quan trọng cần đưa ra lựa chọn từ trái tim.',
    meaningRev: 'Mâu thuẫn, chia rẽ hoặc lựa chọn sai lầm. Cẩn thận với những cám dỗ nhất thời.',
    suit: 'major'
  },
  {
    id: 'ar07',
    name: 'The Chariot',
    nameVI: 'Cỗ Xe Chiến',
    keywords: ['Chiến thắng', 'Ý chí', 'Kiểm soát', 'Tiến lên'],
    meaningUp: 'Thắng lợi nhờ sự kiên trì và ý chí sắt đá. Bạn đang tiến băng băng về phía trước. Hãy giữ vững tay lái.',
    meaningRev: 'Mất kiểm soát, hung hăng hoặc đi sai hướng. Cần bình tĩnh lại để xác định lại mục tiêu.',
    suit: 'major'
  },
  {
    id: 'ar08',
    name: 'Strength',
    nameVI: 'Sức Mạnh',
    keywords: ['Dũng cảm', 'Kiên nhẫn', 'Kiểm soát bản thân', 'Nhân từ'],
    meaningUp: 'Sức mạnh nội tại, lòng dũng cảm và sự kiên nhẫn. Bạn có thể vượt qua mọi thử thách bằng sự mềm mỏng nhưng cương quyết.',
    meaningRev: 'Yếu đuối, thiếu tự tin hoặc để nỗi sợ hãi chi phối. Hãy tin vào sức mạnh của chính mình.',
    suit: 'major'
  },
  {
    id: 'ar09',
    name: 'The Hermit',
    nameVI: 'Ẩn Sĩ',
    keywords: ['Cô độc', 'Suy ngẫm', 'Tìm kiếm', 'Nội tâm'],
    meaningUp: 'Thời gian để ở một mình và suy ngẫm. Hãy tạm rời xa ồn ào để tìm câu trả lời từ bên trong. Sự thông thái đến từ sự tĩnh lặng.',
    meaningRev: 'Sự cô lập không mong muốn, lẩn tránh xã hội hoặc từ chối lời khuyên hữu ích.',
    suit: 'major'
  },
  {
    id: 'ar10',
    name: 'Wheel of Fortune',
    nameVI: 'Bánh Xe Số Phận',
    keywords: ['Thay đổi', 'May mắn', 'Chu kỳ', 'Định mệnh'],
    meaningUp: 'Vận may đang đến. Những thay đổi tích cực sắp xảy ra. Hãy nắm bắt cơ hội khi "bánh xe" quay đến vị trí tốt.',
    meaningRev: 'Vận xui, sự cố ngoài ý muốn hoặc cảm giác bất lực trước số phận. Hãy kiên nhẫn chờ đợi chu kỳ mới.',
    suit: 'major'
  },
  {
    id: 'ar11',
    name: 'Justice',
    nameVI: 'Công Lý',
    keywords: ['Công bằng', 'Sự thật', 'Luật pháp', 'Nhân quả'],
    meaningUp: 'Sự công bằng sẽ được thực thi. Mọi hành động đều có kết quả tương xứng. Hãy trung thực và minh bạch.',
    meaningRev: 'Bất công, thiếu minh bạch hoặc trốn tránh trách nhiệm. Coi chừng những rắc rối pháp lý.',
    suit: 'major'
  },
  {
    id: 'ar12',
    name: 'The Hanged Man',
    nameVI: 'Người Treo Ngược',
    keywords: ['Hy sinh', 'Góc nhìn mới', 'Chờ đợi', 'Buông bỏ'],
    meaningUp: 'Cần một khoảng lặng hoặc chấp nhận hy sinh để đạt được mục tiêu lớn hơn. Hãy thay đổi góc nhìn để thấy giải pháp.',
    meaningRev: 'Sự trì hoãn vô ích, cố chấp hoặc đóng vai nạn nhân. Cần hành động thay vì chỉ chờ đợi.',
    suit: 'major'
  },
  {
    id: 'ar13',
    name: 'Death',
    nameVI: 'Tử Thần',
    keywords: ['Kết thúc', 'Chuyển hóa', 'Buông bỏ', 'Thay đổi lớn'],
    meaningUp: 'Một sự kết thúc cần thiết để mở ra cánh cửa mới. Đừng sợ thay đổi, hãy buông bỏ quá khứ để tái sinh.',
    meaningRev: 'Sợ thay đổi, níu kéo quá khứ hoặc rơi vào trạng thái trì trệ. Sự thay đổi là tất yếu, hãy chấp nhận nó.',
    suit: 'major'
  },
  {
    id: 'ar14',
    name: 'Temperance',
    nameVI: 'Cân Bằng',
    keywords: ['Cân bằng', 'Điều độ', 'Kiên nhẫn', 'Hòa hợp'],
    meaningUp: 'Sự cân bằng và hài hòa. Hãy kiên nhẫn và tránh những hành động cực đoan. Học cách thỏa hiệp để đạt được bình yên.',
    meaningRev: 'Mất cân bằng, thiếu kiên nhẫn hoặc xung đột. Cần điều chỉnh lại lối sống và cảm xúc.',
    suit: 'major'
  },
  {
    id: 'ar15',
    name: 'The Devil',
    nameVI: 'Ác Quỷ',
    keywords: ['Ràng buộc', 'Cám dỗ', 'Vật chất', 'Nghiện ngập'],
    meaningUp: 'Bị trói buộc bởi những ham muốn vật chất hoặc thói quen xấu. Cảm giác mất tự do nhưng thực chất là do chính bạn tạo ra.',
    meaningRev: 'Giải thoát khỏi sự kìm kẹp, nhận ra sự thật và bắt đầu thay đổi tích cực.',
    suit: 'major'
  },
  {
    id: 'ar16',
    name: 'The Tower',
    nameVI: 'Tòa Tháp',
    keywords: ['Đổ vỡ', 'Bất ngờ', 'Thức tỉnh', 'Hỗn loạn'],
    meaningUp: 'Sự thay đổi đột ngột, có thể gây sốc nhưng cần thiết để phá bỏ những nền tảng sai lầm. Sau cơn mưa trời lại sáng.',
    meaningRev: 'Sợ hãi trước thay đổi, cố gắng cứu vãn những gì đã sụp đổ. Hãy chấp nhận sự thật.',
    suit: 'major'
  },
  {
    id: 'ar17',
    name: 'The Star',
    nameVI: 'Ngôi Sao',
    keywords: ['Hy vọng', 'Cảm hứng', 'Bình yên', 'Hồi phục'],
    meaningUp: 'Ánh sáng của hy vọng và sự chữa lành. Tương lai tươi sáng đang chờ đón. Hãy giữ vững niềm tin.',
    meaningRev: 'Mất niềm tin, thất vọng hoặc cảm thấy lạc lõng. Hãy tìm lại nguồn cảm hứng của mình.',
    suit: 'major'
  },
  {
    id: 'ar18',
    name: 'The Moon',
    nameVI: 'Mặt Trăng',
    keywords: ['Ảo tưởng', 'Sợ hãi', 'Tiềm thức', 'Mơ hồ'],
    meaningUp: 'Mọi thứ không như vẻ bề ngoài. Trực giác mạnh nhưng cũng dễ bị ảo tưởng. Cẩn thận với sự lừa dối hoặc nỗi sợ vô hình.',
    meaningRev: 'Sự thật được phơi bày, thoát khỏi nỗi sợ hãi hoặc sự nhầm lẫn.',
    suit: 'major'
  },
  {
    id: 'ar19',
    name: 'The Sun',
    nameVI: 'Mặt Trời',
    keywords: ['Niềm vui', 'Thành công', 'Rạng rỡ', 'Năng lượng'],
    meaningUp: 'Thành công rực rỡ, niềm vui và hạnh phúc. Mọi thứ đều rõ ràng và tích cực. Hãy tận hưởng khoảnh khắc này.',
    meaningRev: 'Niềm vui bị trì hoãn hoặc quá tự tin dấn đến kiêu ngạo. Tuy nhiên, vẫn là một lá bài tích cực.',
    suit: 'major'
  },
  {
    id: 'ar20',
    name: 'Judgment',
    nameVI: 'Phán Xét',
    keywords: ['Thức tỉnh', 'Đánh giá', 'Tái sinh', 'Tiếng gọi'],
    meaningUp: 'Thời điểm để đánh giá lại quá khứ và đưa ra quyết định quan trọng. Một sự thức tỉnh tâm linh hoặc một cơ hội thứ hai.',
    meaningRev: 'Thiếu quyết đoán, chối bỏ sự thật hoặc hối tiếc về quá khứ.',
    suit: 'major'
  },
  {
    id: 'ar21',
    name: 'The World',
    nameVI: 'Thế Giới',
    keywords: ['Hoàn thành', 'Thành tựu', 'Du lịch', 'Trọn vẹn'],
    meaningUp: 'Sự hoàn thành trọn vẹn của một chu kỳ. Thành công đỉnh cao và sự hài lòng. Thế giới đang mở rộng trước mắt bạn.',
    meaningRev: 'Sự dang dở, trì hoãn hoặc cảm giác thiếu sót điều gì đó. Cần nỗ lực thêm chút nữa để về đích.',
    suit: 'major'
  },
  // --- MINOR ARCANA - CUPS (Bộ Ly - Cảm xúc) ---
  {
    id: 'cu01',
    name: 'Ace of Cups',
    nameVI: 'Át Ly',
    keywords: ['Tình yêu mới', 'Cảm xúc', 'Trực giác', 'Sáng tạo'],
    meaningUp: 'Một khởi đầu mới đầy cảm xúc. Tình yêu nảy nở hoặc một nguồn cảm hứng sáng tạo dồi dào.',
    meaningRev: 'Cảm xúc bị kìm nén, thất vọng hoặc tin xấu về tình cảm.',
    suit: 'cups'
  },
  {
    id: 'cu02',
    name: 'Two of Cups',
    nameVI: 'Hai Ly',
    keywords: ['Kết nối', 'Tình yêu', 'Đối tác', 'Hòa hợp'],
    meaningUp: 'Sự kết nối sâu sắc giữa hai người. Tình yêu đôi lứa hoặc sự hợp tác ăn ý.',
    meaningRev: 'Mất cân bằng trong mối quan hệ, hiểu lầm hoặc chia rẽ.',
    suit: 'cups'
  },
  {
    id: 'cu03',
    name: 'Three of Cups',
    nameVI: 'Ba Ly',
    keywords: ['Ăn mừng', 'Tình bạn', 'Cộng đồng', 'Vui vẻ'],
    meaningUp: 'Thời gian để ăn mừng và tụ họp với bạn bè. Niềm vui được chia sẻ là niềm vui nhân đôi.',
    meaningRev: 'Tiệc tùng quá đà, cô lập hoặc có người thứ ba xen vào.',
    suit: 'cups'
  },
  {
    id: 'cu10',
    name: 'Ten of Cups',
    nameVI: 'Mười Ly',
    keywords: ['Hạnh phúc viên mãn', 'Gia đình', 'Hòa hợp', 'Bình yên'],
    meaningUp: 'Hạnh phúc gia đình trọn vẹn. Mọi mong ước về tình cảm đều thành hiện thực.',
    meaningRev: 'Mâu thuẫn gia đình, giá trị bị đảo lộn hoặc hạnh phúc ảo tưởng.',
    suit: 'cups'
  },
  // --- MINOR ARCANA - PENTACLES (Bộ Tiền - Vật chất) ---
  {
    id: 'pe01',
    name: 'Ace of Pentacles',
    nameVI: 'Át Tiền',
    keywords: ['Cơ hội mới', 'Tài lộc', 'Thịnh vượng', 'Ổn định'],
    meaningUp: 'Cơ hội tài chính mới hoặc một khởi đầu vững chắc cho sự nghiệp. Tiền bạc đang đến.',
    meaningRev: 'Cơ hội bị bỏ lỡ, chi tiêu hoang phí hoặc đầu tư kém hiệu quả.',
    suit: 'pentacles'
  },
  {
    id: 'pe10',
    name: 'Ten of Pentacles',
    nameVI: 'Mười Tiền',
    keywords: ['Giàu có', 'Di sản', 'Gia đình', 'Ổn định lâu dài'],
    meaningUp: 'Sự thịnh vượng bền vững, tài sản gia đình và sự an toàn về tài chính.',
    meaningRev: 'Tranh chấp tài sản, thua lỗ hoặc gánh nặng gia đình.',
    suit: 'pentacles'
  },
  // --- MINOR ARCANA - SWORDS (Bộ Kiếm - Trí tuệ/Xung đột) ---
  {
    id: 'sw01',
    name: 'Ace of Swords',
    nameVI: 'Át Kiếm',
    keywords: ['Đột phá', 'Sự thật', 'Rõ ràng', 'Trí tuệ'],
    meaningUp: 'Một ý tưởng đột phá, sự thật được phơi bày. Tư duy sắc bén giúp giải quyết vấn đề.',
    meaningRev: 'Nhầm lẫn, hỗn loạn hoặc lời nói gây tổn thương.',
    suit: 'swords'
  },
   {
    id: 'sw10',
    name: 'Ten of Swords',
    nameVI: 'Mười Kiếm',
    keywords: ['Kết thúc đau đớn', 'Phản bội', 'Thất bại', 'Đáy vực'],
    meaningUp: 'Sự kết thúc đau thương nhưng dứt khoát. Bạn đã chạm đáy và chỉ có thể đi lên từ đây.',
    meaningRev: 'Đang dần hồi phục, vết thương bắt đầu lành nhưng vẫn còn ám ảnh.',
    suit: 'swords'
  },
  // --- MINOR ARCANA - WANDS (Bộ Gậy - Hành động/Đam mê) ---
  {
    id: 'wa01',
    name: 'Ace of Wands',
    nameVI: 'Át Gậy',
    keywords: ['Cảm hứng', 'Cơ hội mới', 'Đam mê', 'Tiềm năng'],
    meaningUp: 'Một nguồn năng lượng mới, cảm hứng sáng tạo bùng nổ. Hãy nắm bắt cơ hội này.',
    meaningRev: 'Thiếu động lực, trì hoãn hoặc ý tưởng không thực tế.',
    suit: 'wands'
  },
  {
    id: 'wa10',
    name: 'Ten of Wands',
    nameVI: 'Mười Gậy',
    keywords: ['Gánh nặng', 'Áp lực', 'Trách nhiệm', 'Căng thẳng'],
    meaningUp: 'Bạn đang gánh vác quá nhiều trách nhiệm. Áp lực lớn nhưng đích đến đã gần kề.',
    meaningRev: 'Buông bỏ bớt gánh nặng, chia sẻ công việc hoặc sụp đổ vì áp lực.',
    suit: 'wands'
  }
];

export interface CardMeta {
  element: string;
  astrology?: string; // Planet or Zodiac
  yesNo: 'Có' | 'Không' | 'Có thể';
}

// Default metadata for Minor Arcana Suits
export const SUIT_META: Record<string, { element: string }> = {
  wands: { element: '🔥 Lửa' },
  cups: { element: '💧 Nước' },
  swords: { element: '💨 Khí' },
  pentacles: { element: '🌍 Đất' },
};

// Specific metadata for Major Arcana (ID based)
export const MAJOR_META: Record<string, CardMeta> = {
  ar00: { element: 'Khí', astrology: 'Sao Thiên Vương', yesNo: 'Có' }, // Fool
  ar01: { element: 'Khí', astrology: 'Sao Thủy', yesNo: 'Có' }, // Magician
  ar02: { element: 'Nước', astrology: 'Mặt Trăng', yesNo: 'Có thể' }, // High Priestess
  ar03: { element: 'Đất', astrology: 'Sao Kim', yesNo: 'Có' }, // Empress
  ar04: { element: 'Lửa', astrology: 'Bạch Dương', yesNo: 'Có' }, // Emperor
  ar05: { element: 'Đất', astrology: 'Kim Ngưu', yesNo: 'Có' }, // Hierophant
  ar06: { element: 'Khí', astrology: 'Song Tử', yesNo: 'Có' }, // Lovers
  ar07: { element: 'Nước', astrology: 'Cự Giải', yesNo: 'Có' }, // Chariot
  ar08: { element: 'Lửa', astrology: 'Sư Tử', yesNo: 'Có' }, // Strength
  ar09: { element: 'Đất', astrology: 'Xử Nữ', yesNo: 'Không' }, // Hermit
  ar10: { element: 'Lửa', astrology: 'Sao Mộc', yesNo: 'Có' }, // Wheel of Fortune
  ar11: { element: 'Khí', astrology: 'Thiên Bình', yesNo: 'Có' }, // Justice
  ar12: { element: 'Nước', astrology: 'Sao Hải Vương', yesNo: 'Không' }, // Hanged Man
  ar13: { element: 'Nước', astrology: 'Bọ Cạp', yesNo: 'Không' }, // Death
  ar14: { element: 'Lửa', astrology: 'Nhân Mã', yesNo: 'Có' }, // Temperance
  ar15: { element: 'Đất', astrology: 'Ma Kết', yesNo: 'Không' }, // Devil
  ar16: { element: 'Lửa', astrology: 'Sao Hỏa', yesNo: 'Không' }, // Tower
  ar17: { element: 'Khí', astrology: 'Bảo Bình', yesNo: 'Có' }, // Star
  ar18: { element: 'Nước', astrology: 'Song Ngư', yesNo: 'Không' }, // Moon
  ar19: { element: 'Lửa', astrology: 'Mặt Trời', yesNo: 'Có' }, // Sun
  ar20: { element: 'Lửa', astrology: 'Sao Diêm Vương', yesNo: 'Có thể' }, // Judgment
  ar21: { element: 'Đất', astrology: 'Sao Thổ', yesNo: 'Có' }, // World
};

// Helper to check Yes/No for Minor Arcana based on number/suit (simplified logic)
// Aces, 3, 6, 9, 10 are usually YES. 5, 7 are usually NO.
// This is a simplified lookup for the sake of the bot feature.
export const MINOR_YES_NO: Record<string, 'Có' | 'Không' | 'Có thể'> = {
  'Ace': 'Có', 'Two': 'Có thể', 'Three': 'Có', 'Four': 'Có', 'Five': 'Không',
  'Six': 'Có', 'Seven': 'Không', 'Eight': 'Có thể', 'Nine': 'Có', 'Ten': 'Có',
  'Page': 'Có', 'Knight': 'Có', 'Queen': 'Có', 'King': 'Có'
};
