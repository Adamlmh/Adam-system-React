export default function ContainerRight({ Meetingdata }) {
  return (
    <div className="container_right">
      <div className="container_right_item boxShadow">
        <div className="container_right_item_body" style={{ padding: "20px" }}>
          <div className="container_right_item_body_content">
            <table className="table">
              <colgroup>
                <col style={{ width: "10%" }} />
                <col style={{ width: "30%" }} />
                <col style={{ width: "12%" }} />
                <col style={{ width: "12%" }} />
                <col style={{ width: "26%" }} />
              </colgroup>
              <thead className="table_thead">
                <tr>
                  <th className="table_cell">纪要ID</th>
                  <th className="table_cell">会议主题</th>
                  <th className="table_cell">会议时间</th>
                  <th className="table_cell">审核状态</th>
                  <th className="table_cell">审核意见</th>
                </tr>
              </thead>

              <tbody className="table_tbody">
                {Meetingdata.map((item) => (
                  <tr key={item.minutesId}>
                    <th className="table_cell">{item.minutesId}</th>
                    <th className="table_cell">{item.meetingTopic}</th>
                    <th className="table_cell">{item.meetingTime}</th>
                    <th className="table_cell">{item.status}</th>
                    <th className="table_cell">{item.reviewComments}</th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
