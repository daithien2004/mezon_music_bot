/**
 * Metadata for Tarot cards (element, astrology, yes/no)
 * Card meanings are in vietnamese-meanings.ts
 */

export interface CardMeta {
  element: string;
  astrology?: string;
  yesNo: 'Có' | 'Không' | 'Có thể';
}

// Metadata for Minor Arcana Suits
export const SUIT_META: Record<string, { element: string }> = {
  wands: { element: '🔥 Lửa' },
  cups: { element: '💧 Nước' },
  swords: { element: '💨 Khí' },
  pentacles: { element: '🌍 Đất' },
};

// Metadata for Major Arcana
export const MAJOR_META: Record<string, CardMeta> = {
  ar00: { element: 'Khí', astrology: 'Sao Thiên Vương', yesNo: 'Có' },
  ar01: { element: 'Khí', astrology: 'Sao Thủy', yesNo: 'Có' },
  ar02: { element: 'Nước', astrology: 'Mặt Trăng', yesNo: 'Có thể' },
  ar03: { element: 'Đất', astrology: 'Sao Kim', yesNo: 'Có' },
  ar04: { element: 'Lửa', astrology: 'Bạch Dương', yesNo: 'Có' },
  ar05: { element: 'Đất', astrology: 'Kim Ngưu', yesNo: 'Có' },
  ar06: { element: 'Khí', astrology: 'Song Tử', yesNo: 'Có' },
  ar07: { element: 'Nước', astrology: 'Cự Giải', yesNo: 'Có' },
  ar08: { element: 'Lửa', astrology: 'Sư Tử', yesNo: 'Có' },
  ar09: { element: 'Đất', astrology: 'Xử Nữ', yesNo: 'Không' },
  ar10: { element: 'Lửa', astrology: 'Sao Mộc', yesNo: 'Có' },
  ar11: { element: 'Khí', astrology: 'Thiên Bình', yesNo: 'Có' },
  ar12: { element: 'Nước', astrology: 'Sao Hải Vương', yesNo: 'Không' },
  ar13: { element: 'Nước', astrology: 'Bọ Cạp', yesNo: 'Không' },
  ar14: { element: 'Lửa', astrology: 'Nhân Mã', yesNo: 'Có' },
  ar15: { element: 'Đất', astrology: 'Ma Kết', yesNo: 'Không' },
  ar16: { element: 'Lửa', astrology: 'Sao Hỏa', yesNo: 'Không' },
  ar17: { element: 'Khí', astrology: 'Bảo Bình', yesNo: 'Có' },
  ar18: { element: 'Nước', astrology: 'Song Ngư', yesNo: 'Không' },
  ar19: { element: 'Lửa', astrology: 'Mặt Trời', yesNo: 'Có' },
  ar20: { element: 'Lửa', astrology: 'Sao Diêm Vương', yesNo: 'Có thể' },
  ar21: { element: 'Đất', astrology: 'Sao Thổ', yesNo: 'Có' },
};
