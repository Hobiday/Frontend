"use client";

import Link from "next/link";
import { useEffect } from "react";
import KakaoLogo from "@/assets/icons/kakao-logo.svg";

const redirectUri = `${process.env.NEXT_PUBLIC_SERVER_URL}/oauth2/authorization/kakao`;

// 카카오 SDK 초기화 재확인
export default function LoginButton() {
  useEffect(() => {
    console.log("window.Kakao: ", window.Kakao);
    if (window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_API_KEY);
        console.log("after Init: ", window.Kakao.isInitialized());
      }
    }
  }, []);

  function kakaoLoginHandler() {
    window.location.href = redirectUri;
  }
  return (
    <div className="flex flex-col justify-center items-center mt-24">
      <div className="flex flex-col justify-center items-center gap-2 mt-4">
        <button onClick={kakaoLoginHandler} className="bg-[#fee500] w-[330px] rounded-full font-normal text-black py-3">
          <div className="flex justify-center items-center">
            <div className="flex m-1 ">
              <KakaoLogo />
            </div>
            <span className="text-sm">카카오톡으로 5초만에 시작하기</span>
          </div>
        </button>
      </div>
    </div>
  );
}
