import React from 'react'
import Page from '../Page'
import './AboutPage.scss'
const AboutPage = () => {
  return (
      <>
        {/* <div className="title">About</div> */}
      <Page
        requireHomeOffice2={true}
        panelContent={{
          title: "Về chúng tôi",
                      quote: "Không chỉ là thiết kế, mà là sự giao thoa tinh tế giữa công nghệ hiện đại, nghệ thuật thị giác và câu chuyện riêng của từng không gian.",
                      content: [
                      "Dự án “Home Office” của chúng tôi là một showroom ảo 3D sống động, nơi tái hiện lại các không gian làm việc tại nhà một cách trực quan, chân thật và truyền cảm hứng. Người dùng có thể tự do khám phá và tương tác trực tiếp với các chi tiết trong không gian từ bố cục nội thất, chất liệu cho đến hiệu ứng ánh sáng, mang lại cảm nhận sống động không chỉ qua thị giác, mà còn đánh thức xúc giác trong một trải nghiệm thực tế ảo chân thực đến bất ngờ.",
                      "Không chỉ đơn thuần là mô hình trình bày, “Home Office” còn là sự kết hợp hài hòa giữa thiết kế, công nghệ và cảm xúc, thể hiện phong cách sáng tạo và khả năng số hóa không gian của công ty. Đây chính là bước tiến mới trong việc kể chuyện thiết kế bằng ngôn ngữ số đầy cuốn hút.",
              ],
      }}
        imageSrc={"images/about1.webp"}
      /> 
    </>
  )
}

export default AboutPage
