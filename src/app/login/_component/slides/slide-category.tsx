import Chip from "@/components/commons/chip";
import Gap from "@/components/commons/gap";
import { PERFORMANCE_CATEGORY } from "@/constants/category";

export default function SlideCategory() {
  return (
    <>
      <div className="w-full px-[28px]">
        <h2 className="font-semibold text-[32px] leading-snug">
          당신의 취향을
          <br /> 알려주세요!
        </h2>
        <p className="text-lg font-medium mt-4">
          좋아하는 문화생활 장르를 선택하고,
          <br /> 나만의 맞춤 추천을 받아보세요.
        </p>
      </div>
      <Gap vertical size={57} />
      <div className="w-full min-h-[305px] px-[28.5px] pt-[38px] pb-[39px] grid grid-cols-3 gap-x-3 gap-y-5 bg-white/50">
        <Chip
          label="전체"
          className="col-span-3 h-[42px] text-center rounded-2xl text-base cursor-default hover:bg-white"
        />
        {PERFORMANCE_CATEGORY.map((category) => (
          <Chip
            key={category.id}
            label={category.name}
            className="h-[42px] cursor-default rounded-2xl hover:bg-white"
          />
        ))}
      </div>
    </>
  );
}
