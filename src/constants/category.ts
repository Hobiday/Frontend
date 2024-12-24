export const TAB_CATEGORY = [
  { id: 0, name: "전체" },
  { id: 1, name: "연극" },
  { id: 2, name: "뮤지컬" },
  { id: 3, name: "클래식" },
  { id: 4, name: "대중음악" },
  { id: 5, name: "국악" },
  { id: 6, name: "무용" },
  { id: 7, name: "서커스/마술" },
  { id: 8, name: "복합" },
  { id: 9, name: "대중무용" },
];

// 전체를 제외한 카테고리
export const PERFORMANCE_CATEGORY = TAB_CATEGORY.filter((category) => category.name !== "전체");

export const FEED_CATEGORY = [
  "연극",
  "무용",
  "대중무용",
  "클래식",
  "국악",
  "대중음악",
  "복합",
  "서커스/마술",
  "뮤지컬",
];
