export default function ContainerRight() {
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
                <tr>
                  <th className="table_cell">1</th>
                  <th className="table_cell">开心每一天</th>
                  <th className="table_cell">2024/01/02</th>
                  <th className="table_cell">待审核</th>
                  <th className="table_cell">描述需要详细些</th>
                </tr>
                <tr>
                  <th className="table_cell">1</th>
                  <th className="table_cell">开心每一天</th>
                  <th className="table_cell">2024/01/02</th>
                  <th className="table_cell">待审核</th>
                  <th className="table_cell">描述需要详细些</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
