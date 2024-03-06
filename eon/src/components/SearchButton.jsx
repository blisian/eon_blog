import React, { useState } from "react";
import axios from 'axios';
import "../output.css";

export default function SearchButton() {
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState("title"); // 기본값을 'title'로 설정

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
  };

  const handleClick = async () => {
    if (!query) {
      alert("검색어를 입력해주세요.");
      return;
    }

    const url = `http://localhost:3000/post?${searchType}=${query}`;

    try {
      const response = await axios.get(url);
      console.log(response.data); // 검색 결과 처리
    } catch (error) {
      console.error("검색 중 오류가 발생했습니다.", error);
    }

    alert(`검색어: ${query}`);
  };

  return (
    <div className="pt-24">
      <div className="search-bar relative w-96" style={{ width: "400px", margin: "0 auto" }}>
        <select value={searchType} onChange={handleSearchTypeChange} className="h-10 border border-gray-300 rounded-l-full outline-none">
          <option value="title">제목</option>
          <option value="writer">작성자</option>
          <option value="content">내용</option>
        </select>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="검색어를 입력하세요"
          className="w-64 h-10 px-4 border-t border-b border-r border-gray-300 rounded-r-full outline-none"
        />
        <button
          onClick={handleClick}
          className="absolute right-0 top-0 w-20 h-10 border-none rounded-r-full bg-blue-500 text-white font-bold cursor-pointer"
        >
          검색
        </button>
      </div>
    </div>
  );
}
