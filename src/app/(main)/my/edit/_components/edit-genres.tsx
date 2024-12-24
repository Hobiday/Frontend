import SvgArrowForward from "@/assets/svgr-icons/ArrowForward";
import BottomSheet from "@/components/bottom-sheet";
import Button from "@/components/commons/button";
import Chip from "@/components/commons/chip";
import { FEED_CATEGORY } from "@/constants/category";
import { useBottomSheet } from "@/contexts";
import { useUpdateProfileMutation } from "@/hooks/user/use-profile-update";
import { useOnboardingStore } from "@/stores/use-onboarding.store";
import { useState } from "react";

interface ProfileGenresProps {
  profileGenres: string[];
}

export default function EditProfileGenres({ profileGenres }: ProfileGenresProps) {
  const { open, close } = useBottomSheet();
  const bottomSheetId = "editProfileGenres";
  const { categories, setCategories } = useOnboardingStore();
  const [selectedCategories, setSelectedCategories] = useState<string[]>(categories);

  const categoryList = FEED_CATEGORY;
  const { mutate: updateProfile } = useUpdateProfileMutation();

  function handleOpen() {
    setSelectedCategories(profileGenres);
    open(bottomSheetId);
  }

  function handleAllReset() {
    setSelectedCategories([]);
  }

  function handleChipClick(category: string) {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((item) => item !== category) : [...prev, category],
    );
  }

  async function handleUpdate() {
    if (selectedCategories.length === 0) {
      alert("관심사는 최소 1개 이상 선택해야 합니다.");
      return;
    }

    updateProfile(
      { profileGenres: selectedCategories },
      {
        onSuccess: () => {
          setCategories(selectedCategories);

          alert("수정이 완료되었습니다.");
        },
        onError: () => {
          alert("수정에 실패했습니다.");
        },
        onSettled: () => {
          close(bottomSheetId);
        },
      },
    );
  }

  return (
    <>
      {/* 관심사 */}
      <div className="w-full bg-white py-4 mb-1 flex items-center justify-between">
        <div className="flex items-center px-4">
          <h3 className="text-sm font-semibold whitespace-nowrap mr-3">관심사</h3>
          <div className="flex flex-wrap gap-x-4 gap-y-2 px-6 py-3">
            {profileGenres.map((tag, index) => (
              <span key={index} className="px-4 py-1 bg-gray-50 text-gray-700 rounded-lg text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <button onClick={handleOpen} className="px-4">
          <SvgArrowForward />
        </button>

        <BottomSheet id={bottomSheetId} height="45%">
          <BottomSheet.Title>관심사 선택</BottomSheet.Title>
          <BottomSheet.Contents>
            <div className="px-[29px] grid grid-cols-3 gap-x-2 gap-y-4">
              {categoryList.map((category, index) => (
                <Chip
                  key={index}
                  label={category}
                  state={selectedCategories.includes(category) ? "selected" : "default"}
                  onClick={() => handleChipClick(category)}
                />
              ))}
            </div>

            <div className="px-[29px] flex justify-between gap-4 mt-9">
              <Button
                variant="primary"
                size="lg"
                onClick={handleAllReset}
                className="bg-white text-gray-300 font-semibold text-base hover:bg-white active:bg-white"
              >
                초기화
              </Button>
              <Button variant="primary" size="lg" onClick={handleUpdate} className="w-52 font-semibold text-base">
                {`${selectedCategories.length}개 적용하기`}
              </Button>
            </div>
          </BottomSheet.Contents>
        </BottomSheet>
      </div>
    </>
  );
}
