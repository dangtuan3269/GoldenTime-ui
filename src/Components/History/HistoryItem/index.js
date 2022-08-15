import React from "react";
import { HistoryItemWrapper } from "./style";


const HistoryItem = ({DataDigitalHistory}) => {
    return (
      <HistoryItemWrapper>
        <table>
          <tr className="title">
            <td className="id">ID</td>
            <td className="name">NAME</td>
            <td className="code">CODE</td>
            <td className="price">PRICE</td>
            <td className="receiver">RECEIVER</td>
            <td className="address">ADDRESS</td>
            <td className="status">STATUS</td>
          </tr>
          {DataDigitalHistory.map((item) => {
            {
              console.log("item ========", item);
            }
            return (
                <tr>
                  <td className="id">{item.id}</td>
                  <td className="name">{item.name}</td>
                  <td className="code">{item.code}</td>
                  <td className="price">{item.price}</td>
                  <td className="receiver">{item.receiver}</td>
                  <td className="address">{item.address}</td>
                  <td className="status">{item.status}</td>
                </tr>
            );
          })}
        </table>
      </HistoryItemWrapper>
    );
}

export default HistoryItem;