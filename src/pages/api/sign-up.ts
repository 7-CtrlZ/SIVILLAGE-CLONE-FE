import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, password, name, phoneNumber } = req.body;

    // 여기서 서버 측에서 실제로 데이터 처리
    // 예를 들어, 데이터베이스에 유저 정보를 저장하는 로직을 추가합니다.

    // 성공 시
    res.status(200).json({ message: "회원가입 성공" });

    // 실패 시, 이미 존재하는 유저라면 다음과 같이 에러를 보낼 수 있습니다.
    // res.status(409).json({ message: '이미 존재하는 이메일 또는 전화번호입니다.' });
    // res.status(400).json({ message: '잘못된 요청입니다.' });
    // res.status(500).json({ message: '서버 오류가 발생했습니다.' });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
