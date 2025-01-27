import React from "react";


interface TableProps {
  headers: string[]; 
  data: Record<string, string | number>[]; 
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        {/* Table Header */}
        <thead className="bg-slate-800">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-2 text-left border-b text-slate-300 font-semibold"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="odd:bg-slate-900 even:bg-slate-800">
              {headers.map((header, index) => (
                <td key={index} className="px-4 py-4 border-b text-slate-200">
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
