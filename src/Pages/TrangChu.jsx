import React from 'react'
import Header from '../components/Header'

const TrangChu = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '0',
      margin: '0',
    },
    header: {
      textAlign: 'center',
      color: 'white',
      paddingTop: '60px',
      paddingBottom: '40px',
    },
    title: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      marginBottom: '10px',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    },
    subtitle: {
      fontSize: '1.2rem',
      opacity: '0.9',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '30px',
      padding: '40px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    card: {
      background: 'white',
      borderRadius: '15px',
      padding: '30px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer',
    },
    cardHover: {
      transform: 'translateY(-10px)',
      boxShadow: '0 15px 40px rgba(0,0,0,0.3)',
    },
    cardIcon: {
      fontSize: '3rem',
      marginBottom: '15px',
    },
    cardTitle: {
      fontSize: '1.5rem',
      color: '#333',
      marginBottom: '10px',
      fontWeight: 'bold',
    },
    cardText: {
      color: '#666',
      lineHeight: '1.6',
    },
    button: {
      marginTop: '20px',
      padding: '10px 20px',
      backgroundColor: '#667eea',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: 'bold',
      transition: 'background-color 0.3s ease',
    },
    footer: {
      textAlign: 'center',
      color: 'white',
      padding: '40px 20px',
      marginTop: '40px',
      borderTop: '1px solid rgba(255,255,255,0.2)',
    },
  }

  const [hoveredCard, setHoveredCard] = React.useState(null)

  const cards = [
    { id: 1, icon: '🚀', title: 'Nhanh chóng', text: 'Tốc độ tải cực nhanh với công nghệ hiện đại nhất' },
    { id: 2, icon: '✨', title: 'Đẹp mắt', text: 'Giao diện thiết kế hiện đại, thân thiện với người dùng' },
    { id: 3, icon: '🔒', title: 'An toàn', text: 'Bảo mật dữ liệu hàng đầu với mã hóa SSL' },
    { id: 4, icon: '📱', title: 'Responsive', text: 'Hoạt động hoàn hảo trên mọi thiết bị' },
    { id: 5, icon: '⚡', title: 'Hiệu suất', text: 'Tối ưu hóa cho hiệu năng tối đa' },
    { id: 6, icon: '🎯', title: 'Chính xác', text: 'Độ chính xác cao trong mọi chức năng' },
  ]

  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.header}>
        <h1 style={styles.title}>🎨 Trang Chủ Demo</h1>
        <p style={styles.subtitle}>Trải nghiệm giao diện tuyệt vời và hiện đại</p>
      </div>

      <div style={styles.grid}>
        {cards.map((card) => (
          <div
            key={card.id}
            style={{
              ...styles.card,
              ...(hoveredCard === card.id ? styles.cardHover : {}),
            }}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={styles.cardIcon}>{card.icon}</div>
            <h3 style={styles.cardTitle}>{card.title}</h3>
            <p style={styles.cardText}>{card.text}</p>
            <button style={styles.button}>Tìm hiểu thêm</button>
          </div>
        ))}
      </div>

      <div style={styles.footer}>
        <p>&copy; 2024 React Demo. Được thiết kế với ❤️</p>
      </div>
      <Header/>
    </div>
  )
}

export default TrangChu
