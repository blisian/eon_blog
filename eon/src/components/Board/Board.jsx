import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useTable } from "react-table";
import Table from "react-bootstrap/Table";
import BoardListNav from "./BoardListNav";

export default function Board() {
  // 데이터 상태 초기화 및 더미 데이터 채우기
  const [data] = useState([
    { id: 1, title: "First Post", author: "John Doe", date: "2024-02-07" },
    { id: 2, title: "Second Post", author: "Jane Smith", date: "2024-02-06" },
    // 추가적인 더미 데이터를 필요에 따라 채워넣을 수 있습니다.
  ]);

  const columns = useMemo(
    () => [
      { Header: "#", accessor: "id" },
      { Header: "Title", accessor: "title" }, // 글 제목 변경
      { Header: "Author", accessor: "author" }, // 올린 사람 변경
      { Header: "Date", accessor: "date" }, // 올린 날짜 변경
    ],
    []
  );

  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <BoardListNav />
      </div>
      <div style={{ flex: 4, position: 'relative' }}>
        <Table striped {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end" style={{ position: 'absolute', left: '0', bottom: '0', marginBottom: '10px', marginLeft: '10px' }}>
          <a
            href="/boardlist/write"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            글 작성 <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
