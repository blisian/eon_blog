import { React, useState } from "react";
import Layout from "../../layout/Layout";
import WriteBoard from "../../components/WriteBoard";
import Form from "react-bootstrap/Form";
import NavUI from "../../components/Board/NavUI";
import axios from 'axios';
export default function Write() {
  // 상태 변수와 설정 함수를 선언합니다.
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [type, setType] = useState('');
  const [file, setFile] = useState(null);
  const [picture, setPicture] = useState(null);

  // 폼의 입력값이 변경될 때마다 상태 변수를 업데이트합니다.
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.value);
  };

  const handlePictureChange = (e) => {
    setPicture(e.target.value);
  };

  // submit 버튼을 클릭하면 axios.post 메소드를 호출합니다.
  const handleSubmit = async () => {

    if (type === '' || type === '타입을 선택하세요') {
      // 사용자에게 type을 선택하라는 경고를 표시합니다.
      alert('글 타입을 선택해주세요.');
      return; // 함수를 여기서 종료하여 폼 제출을 중단합니다.
    }

    try {
      const url = 'http://localhost:3000/post';
      // 데이터베이스의 API 엔드포인트와 데이터 객체를 인자로 넘깁니다.
      const userResponse = await axios.get('http://localhost:3000/user/1');
      const userUid = userResponse.data.uid;
      const userName = userResponse.data.name;

      const response = await axios.post
      (
        url,
        {
        uid:userUid,
        title: title,
        content: content,
        writer: userName,
        type: type,
        file: "www.",
        picture: "www."
        }
      );
      // 응답이 성공적이면 콘솔에 결과를 출력하고, 적절한 처리를 합니다.
      console.log(response.data);
      alert('글이 성공적으로 등록되었습니다.');
    } catch (error) {
      // 에러가 발생하면 콘솔에 에러를 출력하고, 적절한 처리를 합니다.
      console.error(error);
      alert('글 등록에 실패했습니다.');
    }
  };

  return (
    <div>
      <Layout>
        <NavUI />
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>글 제목</Form.Label>
            {/* 입력값이 변경될 때마다 handleTitleChange 함수를 호출합니다. */}
            <Form.Control type="email" placeholder="글 제목을 입력하세요" onChange={handleTitleChange} />
          </Form.Group>

          {/* Type 선택 드롭다운 메뉴를 추가합니다. */}
          <Form.Group className="mb-3" controlId="formBasicType">
            <Form.Label>글 타입</Form.Label>
            <Form.Select aria-label="Default select example" onChange={handleTypeChange}>
              <option>타입을 선택하세요</option>
              <option value="assginment">과제</option>
              <option value="gallery">갤러리</option>
              <option value="find">모집해요</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>글 내용</Form.Label>
            {/* // 입력값이 변경될 때마다 handleContentChange 함수를 호출합니다. */}
            <Form.Control as="textarea" rows={3} onChange={handleContentChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formFile">
            <Form.Label>파일 선택</Form.Label>
            <Form.Control type="file" onChange={handleFileChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPicture">
            <Form.Label>이미지 선택</Form.Label>
            <Form.Control type="file" onChange={handlePictureChange} />
          </Form.Group>

        </Form>
        <WriteBoard />
        {/* // submit 버튼을 클릭하면 handleSubmit 함수를 호출합니다. */}
        <button
          type="submit"
          class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </Layout>
    </div>
  );
}
