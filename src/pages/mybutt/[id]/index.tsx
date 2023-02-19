export default function MyButtDetail() {
    return (
        <section>
            <input type='text' placeholder='title' />
            <input type='text' placeholder='description' />

            <table>
                <tr>
                    <th>category</th>
                    <th>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </th>
                </tr>
                <tr>
                    <th>date</th>
                    <td>
                        <input type='date' placeholder='date' />
                    </td>
                </tr>
                <tr>
                    <th>status</th>
                    <td>
                        <select>
                            <option>Todo</option>
                            <option>Doing</option>
                            <option>Done</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th>filling</th>
                    <td>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </td>
                </tr>
                <tr>
                   <td rowSpan={2}>
                       <input type='file' placeholder='select image' />
                   </td>
                </tr>
                <tr>
                    <td rowSpan={2}>
                        <textarea placeholder='contents'></textarea>
                    </td>
                </tr>
            </table>
        </section>
    )
}
