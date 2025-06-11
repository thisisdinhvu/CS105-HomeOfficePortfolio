import React from 'react'
import Page from '../Page'
import './DevWorkPage.scss'

const DevWorkPage = () => {
  return (
      <>
        {/* <div className="title">Hello from DevWorkPage</div> */}
      <Page requireHomeOffice2={true}
        panelContent={{
          title: "Home Office 1",
          quote: "Tĩnh lặng, xanh mát – nơi ý tưởng nảy mầm.",
          content: [
            "Không gian được bao phủ bởi tông màu matcha dịu nhẹ, kết hợp cùng sàn gỗ nâu ấm tạo nên bầu không khí tự nhiên, thư thái. Góc làm việc được bố trí khoa học với bàn gỗ đơn giản, tranh treo tường và cây xanh nhỏ ngay cạnh, giúp khơi gợi cảm hứng và sự tập trung.",
            "Chiếc sofa êm ái bên cửa sổ là điểm dừng nhẹ nhàng giữa những giờ làm việc, mang đến cảm giác nghỉ ngơi thoải mái. Từng chi tiết nội thất – từ kệ sách cao đến đèn bàn, đều góp phần tạo nên một môi trường làm việc yên bình, gần gũi và tràn đầy năng lượng.",
            "Ánh sáng vàng ấm hắt qua khung cửa, đổ bóng nhẹ nhàng lên mặt bàn và sàn gỗ, tạo nên nhịp điệu ánh sáng – bóng đổ đầy chất thơ. Sự kết hợp giữa ánh sáng, vật liệu và màu sắc giúp không gian luôn sống động, nhưng vẫn giữ được cảm giác bình yên và riêng tư.",
            "Mỗi yếu tố đều được cân nhắc kỹ lưỡng: cây xanh được đặt đúng tầm mắt, tranh treo vừa đủ điểm nhấn, và cách bài trí mở giúp luồng di chuyển thoáng đãng. Đây là không gian nơi hiệu suất làm việc và cảm hứng sáng tạo được nuôi dưỡng song hành."
              ],
      }}
      imageSrc={"/images/devwork1.webp"}/> 
    </>
  )
}

export default DevWorkPage
