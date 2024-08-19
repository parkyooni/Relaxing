import ButtonBox from "@components/common/ButtonBox";
import { ModalBackground, ModalContainer } from "@public/style/Modal.styles";

const CancelModal = ({ onConfirm, onCancel }) => {
  return (
    <ModalBackground onClick={onCancel}>
      <ModalContainer className="large" onClick={e => e.stopPropagation()}>
        <p>
          <span>프로젝트 생성을 취소 하시겠습니까?</span>
          <span>입력한 정보는 복구할 수 없습니다.</span>
        </p>
        <div className="button-group">
          <ButtonBox variant="default" onClick={onCancel}>
            취소
          </ButtonBox>
          <ButtonBox variant="active" onClick={onConfirm}>
            확인
          </ButtonBox>
        </div>
      </ModalContainer>
    </ModalBackground>
  );
};

export default CancelModal;
