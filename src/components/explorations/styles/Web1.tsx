export function Web1() {
  return (
    <div className="min-h-screen bg-gray-200 p-0">
      <div className="max-w-[1000px] mx-auto bg-white">
        {/* Classic Web 1.0 Header */}
        <div className="bg-white border-b-4 border-black">
          <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
            <tbody>
              <tr>
                <td bgcolor="#000080" height="60" align="center">
                  <font color="white" size="6" face="Arial, sans-serif">
                    <b>VALENTINA BEROIS</b>
                  </font>
                </td>
              </tr>
              <tr>
                <td bgcolor="#C0C0C0" height="30">
                  <font size="2" face="Arial, sans-serif">
                    &nbsp;&nbsp;
                    <a href="#">[HOME]</a> | 
                    <a href="#">[ABOUT]</a> | 
                    <a href="#">[PORTFOLIO]</a> | 
                    <a href="#">[CONTACT]</a>
                  </font>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Main Content Table */}
        <table width="100%" cellPadding="20" cellSpacing="0" border={0}>
          <tbody>
            <tr>
              <td width="70%" valign="top">
                <h1 style={{ fontSize: '24px', fontFamily: 'Arial, sans-serif', marginBottom: '10px' }}>
                  Digital Transformation Leader
                </h1>
                <hr />
                <p style={{ fontFamily: 'Times New Roman, serif', fontSize: '14px', lineHeight: '1.6' }}>
                  Driving strategic UX initiatives and transforming enterprise organizations through design, development, and innovation.
                </p>
                
                <h2 style={{ fontSize: '18px', fontFamily: 'Arial, sans-serif', color: '#000080' }}>
                  Selected Work:
                </h2>
                <ul>
                  <li><a href="#">Enterprise Projects</a> - Major organizational transformations</li>
                  <li><a href="#">AI Experiments</a> - Exploring intelligent systems</li>
                  <li><a href="#">Time Machine</a> - Design archives</li>
                </ul>
                
                <p style={{ marginTop: '30px' }}>
                  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='31'%3E%3Crect fill='%23007bff' width='88' height='31'/%3E%3Ctext x='44' y='20' font-family='Arial' font-size='14' fill='white' text-anchor='middle'%3EContact%3C/text%3E%3C/svg%3E" alt="Contact Button" />
                </p>
              </td>
              
              <td width="30%" valign="top" bgcolor="#FFFFCC">
                <h3 style={{ fontSize: '14px', fontFamily: 'Arial, sans-serif' }}>
                  Quick Stats:
                </h3>
                <table width="100%" border={1} cellPadding="5" bordercolor="#000000">
                  <tbody>
                    <tr>
                      <td align="center" bgcolor="#FFFF99">
                        <b>15</b><br />
                        <font size="1">Years</font>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" bgcolor="#CCFFCC">
                        <b>100+</b><br />
                        <font size="1">Projects</font>
                      </td>
                    </tr>
                  </tbody>
                </table>
                
                <hr />
                
                <p style={{ fontSize: '12px', fontFamily: 'Arial, sans-serif' }}>
                  <b>Location:</b><br />
                  Germany
                </p>
                
                <p style={{ fontSize: '12px', fontFamily: 'Arial, sans-serif' }}>
                  <b>Email:</b><br />
                  <a href="mailto:hello@valentina.com">hello@valentina.com</a>
                </p>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Footer */}
        <div style={{ backgroundColor: '#C0C0C0', padding: '10px', textAlign: 'center', borderTop: '2px solid #000' }}>
          <font size="1" face="Arial, sans-serif">
            © 2026 Valentina Berois | Best viewed in Netscape Navigator 4.0+
          </font>
        </div>
      </div>
    </div>
  );
}
