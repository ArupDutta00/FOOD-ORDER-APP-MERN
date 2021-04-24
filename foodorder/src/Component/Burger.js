import React from 'react'

const Burger = (props) => {
    var data = props.getdata[1]
    if (data) {
        return (
            <div id="element">
                <p id="tasty">{data.subItemsData.name}</p>
                {data.subItemsData.subItems.map((newArr, index) => <div id="elementwith">
                    <table width="500" border="0">
                        <tbody>
                            <tr>
                                <th id="left" scope="col">
                                    <p id="tile">{newArr.name}</p>
                                    <p>Rs. {newArr.price}</p>
                                    <p>{newArr.description}</p>

                                    <button onClick={() => { props.addItem(newArr) }}>Order Now</button></th>
                                <th scope="col"><img src={newArr.image} width="200" alt=""></img></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )}
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default Burger
