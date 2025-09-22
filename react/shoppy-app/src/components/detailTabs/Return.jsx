import React, { useState, useEffect } from 'react';
import { axiosData } from '../../utils/dataFetch.js';

export function Return() {
    const [returnData, setReturnData] = useState({});
    useEffect(() => {
        const fetch = async () => {
            const jsonData = await axiosData("/data/productReturn.json");
            setReturnData(jsonData);
        }
        fetch();
    }, [])

    console.log(returnData);


    return (
        <div>
            <div style={{ paddingTop: "20px" }}></div>
            <h4>{returnData && returnData.title}</h4>
            <p style={{ paddingBottom: "20px" }}>{returnData && returnData.description}</p>
            <table>
                <tbody>
                   
                        {returnData.list && returnData.list.map((item) =>
                        <tr>
                            <td>
                                    <td style={{ width: "30%", textAlign: "center" }}>{item.title}</td>
                            </td>
                                    <td>
                                        {item.infoList && item.infoList.map((i) =>
                                        <li>{i}</li>
                                        )}
                                    </td>
                        </tr>
                           
                        )}
                 
                </tbody>

            </table>
        </div>
    );
}