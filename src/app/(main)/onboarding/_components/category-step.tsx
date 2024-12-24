import Button from "@/components/commons/button";
import Chip from "@/components/commons/chip";
import Gap from "@/components/commons/gap";
import StepLayout from "@/components/layout/step-layout";
import { PERFORMANCE_CATEGORY } from "@/constants/category";
import { useOnboardingStore } from "@/stores/use-onboarding.store";
import { useState } from "react";

type CategoryStepProps = {
  onNext: (categories: string[]) => void;
};

export default function CategoryStep({ onNext }: CategoryStepProps) {
  const { categories, setCategories } = useOnboardingStore();
  const [selectedCategories, setSelectedCategories] = useState<string[]>(categories);

  const isAllSelected = selectedCategories.length === PERFORMANCE_CATEGORY.length;

  const handleAllClick = () => {
    if (isAllSelected) {
      setSelectedCategories([]);
    } else {
      setSelectedCategories(PERFORMANCE_CATEGORY.map((category) => category.name));
    }
  };

  const handleChipClick = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((item) => item !== category) : [...prev, category],
    );
  };

  const handleNext = () => {
    setCategories(selectedCategories);
    onNext(categories);
  };

  return (
    <StepLayout>
      <StepLayout.Title>
        선호하는 공연 카테고리를 <br /> 선택하세요.
      </StepLayout.Title>

      <StepLayout.Content>
        <h3 className="text-sm text-gray-600 mt-2">선호에 맞는 공연을 추천해드릴게요.</h3>
        <Gap vertical size={65} className="w-full" />
        <div className="px-[29px] grid grid-cols-3 gap-x-2 gap-y-4">
          <Chip
            label="전체"
            state={isAllSelected ? "selected" : "default"}
            onClick={handleAllClick}
            className="col-span-3 text-center"
          />
          {PERFORMANCE_CATEGORY.map((category) => (
            <Chip
              key={category.id}
              label={category.name}
              state={selectedCategories.includes(category.name) ? "selected" : "default"}
              onClick={() => handleChipClick(category.name)}
            />
          ))}
        </div>
      </StepLayout.Content>

      <StepLayout.Footer>
        <p className="text-center text-sm text-gray-600 mb-5">공연 카테고리는 나중에 다시 수정할 수 있어요!</p>
        <Button
          variant="primary"
          size="lg"
          fullWidth
          onClick={() => {
            if (selectedCategories.length > 0) {
              handleNext();
            }
          }}
          disabled={selectedCategories.length === 0}
        >
          완료
        </Button>
      </StepLayout.Footer>
    </StepLayout>
  );
}
