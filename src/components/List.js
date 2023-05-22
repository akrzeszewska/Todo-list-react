import { ListItem } from "./ListItem";

export const List = (props) => {
    console.table(props.todosToRender);
    console.log(props.setTodos)

    return (
        <article>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.todosToRender.map((todoInMap) => {
                            return (
                           <ListItem 
                           key={todoInMap.id} 
                           todo={todoInMap} 
                           setTodos={props.setTodos} 
                           setTodoToEdit={props.setTodoToEdit}
                           />
                    )})
                    }
                </tbody>
            </table>
        </article>
    );
}