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

  // 폼의 입력값이 변경될 때마다 상태 변수를 업데이트합니다.
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  
  // submit 버튼을 클릭하면 axios.post 메소드를 호출합니다.
  const handleSubmit = async () => {
    try {
      const url = 'http://localhost:3000/post';
      // 데이터베이스의 API 엔드포인트와 데이터 객체를 인자로 넘깁니다.

      /* const uid1 = await axios.get
      (
        url,
        params: {uid:uid}
      ) 
*/
      const response = await axios.post
      (
        url, 
        {
        uid:1,
        title: title,
        content: content,
        writer:"song",
        type: "assignment1",
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
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>글 내용</Form.Label>
            {/* // 입력값이 변경될 때마다 handleContentChange 함수를 호출합니다. */}
            <Form.Control as="textarea" rows={3} onChange={handleContentChange} />
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
