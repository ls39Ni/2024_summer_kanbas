export default function TableExercise() {
  return (
    <div id="wd-tables">
      <h4>Table Tag</h4>
      <table border={1} width="100%">
        {/* table, border, width */}
        <thead>
          {/* table headings */}
          <tr>
            {/* table row */}
            <th>Quiz</th> {/* table heading*/}
            <th>Topic</th>
            <th>Date</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {/* table body */}
          <tr>
            {/* table row */}
            <td>Q1</td> {/* table data / cell */}
            <td>HTML</td>
            <td>2/3/21</td>
            <td>85</td>
          </tr>
          <tr>
            {/* table row */}
            <td>Q2</td> {/* table data / cell */}
            <td>CSS</td>
            <td>3/3/21</td>
            <td>90</td>
          </tr>
          <tr>
            {/* table row */}
            <td>Q3</td> {/* table data / cell */}
            <td>JavaScript</td>
            <td>4/3/21</td>
            <td>95</td>
          </tr>
          <tr>
            {/* table row */}
            <td>Q4</td> {/* table data / cell */}
            <td>CSS</td>
            <td>4/10/21</td>
            <td>90</td>
          </tr>
          <tr>
            {/* table row */}
            <td>Q5</td> {/* table data / cell */}
            <td>JavaScript</td>
            <td>4/17/21</td>
            <td>88</td>
          </tr>
          <tr>
            {/* table row */}
            <td>Q6</td> {/* table data / cell */}
            <td>HTML</td>
            <td>4/24/21</td>
            <td>90</td>
          </tr>
          <tr>
            {/* table row */}
            <td>Q7</td> {/* table data / cell */}
            <td>JavaScript</td>
            <td>5/1/21</td>
            <td>92</td>
          </tr>
          <tr>
            {/* table row */}
            <td>Q8</td> {/* table data / cell */}
            <td>CSS</td>
            <td>5/8/21</td>
            <td>90</td>
          </tr>
          <tr>
            {/* table row */}
            <td>Q9</td> {/* table data / cell */}
            <td>JavaScript</td>
            <td>5/15/21</td>
            <td>91</td>
          </tr>
          <tr>
            {/* table row */}
            <td>Q10</td> {/* table data / cell */}
            <td>HTML</td>
            <td>5/23/21</td>
            <td>90</td>
          </tr>
        </tbody>
        <tfoot>
          {/* table row */}
          <tr>
            <td colSpan={3}>Average</td> {/* column span */}
            <td>90</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
