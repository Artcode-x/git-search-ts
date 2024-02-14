import * as S from "./NotFound.styled";
import { useNavigate } from "react-router";

function NotFound() {
  const navigate = useNavigate();

  return (
    <S.Content>
      <S.NotFoundBackground />
      <S.NotFoundButton onClick={() => navigate("/")} />
    </S.Content>
  );
}

export default NotFound;