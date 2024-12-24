import Gap from "@/components/commons/gap";
import Image from "next/image";

export default function SlideWishlist() {
  return (
    <>
      <div className="w-full px-[28px]">
        <h2 className="font-semibold text-[32px] leading-snug">
          놓치고 싶지 않은 문화생활,
          <br /> 위시리스트에 담아보세요!
        </h2>
        <p className="text-lg font-medium mt-[15px]">
          보고 싶은 공연, 영화, 전시 등을
          <br /> 언제든지 확인할 수 있습니다.
        </p>
      </div>
      <Gap vertical size={58} />
      <div className="relative w-full h-[305px] bg-white/50">
        <Image src="/login-onboarding/login-onboarding-wishlist.svg" alt="wishlist" fill className="object-cover" />
      </div>
    </>
  );
}
