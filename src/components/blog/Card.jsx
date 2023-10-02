import React from 'react'
import './blog.css'
// import {blog} from "../../assets/data/data"
import { AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt, AiOutlineTags } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import ba1 from '../../assets/images/blogs/ba1.jpg'
import ba2 from '../../assets/images/blogs/ba2.jpg'
import ba3 from '../../assets/images/blogs/ba3.jpg'
import ba4 from '../../assets/images/blogs/ba4.jpg'
import ba5 from '../../assets/images/blogs/ba5.jpg'
import ba6 from '../../assets/images/blogs/ba6.jpg'
import ba7 from '../../assets/images/blogs/ba7.jpg'
import ba8 from '../../assets/images/blogs/ba8.jpg'
import ba9 from '../../assets/images/blogs/ba9.jpg'
import ba10 from '../../assets/images/blogs/ba10.jpg'


export const blog = [
    {
      id: 1,
      title: "POST NO.1 CONTAINING A YOUTUBE VIDEO",
      desc: "Quisque at tellus nec magna viverra euismod. Maecenas lobortis, nisl et sodales blandit, neque mi ullamcorper eros, id efficitur ex velit in ante. Suspendisse elementum congue lacus quis gravida. Nunc eu hendrerit risus. Quisque blandit, orci non maximus vulputate, ligula ante ornare enim, ac interdum lorem leo varius mauris. Aliquam non sem vel orci malesuada sagittis. Vivamus id ullamcorper tellus. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras et sapien a arcu feugiat mattis. Suspendisse sed magna quis turpis rhoncus venenatis.",
      category: "Nature",
      cover: ba1,
      date: "APRIL 05, 2018",
    },
  
    {
      id: 2,
      title: "JUPITER IS FULL OF WATERFALLS SO EARLY",
      desc: "Vestibulum suscipit nibh sed odio pharetra, condimentum lacinia nisi varius. Ut ac ornare diam. Suspendisse vitae quam risus. Nulla ullamcorper libero justo, vitae dictum est efficitur id. Aenean et lacinia arcu. Sed non dolor id risus dapibus congue. Quisque tincidunt vitae tellus ut malesuada. Nulla eleifend nibh a maximus consectetur. Duis et mi porta, bibendum leo non, fermentum enim. Vivamus sed diam suscipit, ultricies ipsum sed, efficitur dui. Sed pharetra purus at iaculis vehicula. Fusce pellentesque placerat ante, id elementum dolor maximus sed. Aenean viverra at lectus quis vehicula. Aenean at arcu odio. Etiam mauris justo, cursus finibus aliquam eget, fermentum nec nulla. Sed finibus viverra magna non sagittis. Mauris fringilla augue vel quam rhoncus, in tempor enim lacinia. Donec nibh velit, scelerisque id neque sit amet, ornare consectetur sem. Donec convallis nec justo id consequat. Donec sem leo, pulvinar sit amet nisi a, mollis gravida est. Duis porttitor eleifend cursus. Vivamus ac dapibus dolor. Nullam leo tellus, rhoncus sit amet tempor vel, malesuada vel augue. Morbi laoreet sem eget tortor pulvinar mattis. Maecenas commodo ultricies orci, ut blandit urna accumsan sit amet. Ut a porttitor orci, maximus feugiat turpis. In eu sodales orci, et volutpat felis. Quisque orci quam, gravida at nulla tempor, vulputate pretium magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent congue, magna vitae interdum blandit, arcu mauris placerat nulla, sit amet rhoncus justo risus in neque.",
      category: "Nature",
      cover: ba2,
      date: "MARCH 15, 2018",
    },
    {
      id: 3,
      title: "START YOU CUP ON TABLE OF THAT",
      desc: "Duis rutrum eu tortor et efficitur. Nulla ac consequat leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut vestibulum mattis est eu volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae tristique nibh. Quisque vel lectus interdum lacus ultricies venenatis. In ex nisl, commodo vitae risus ac, efficitur imperdiet dolor. Maecenas dignissim luctus mi sit amet mollis. Maecenas sit amet bibendum dolor, a molestie tellus. Donec et varius risus. Duis tincidunt mi lorem, vitae luctus turpis rutrum sit amet. Aliquam aliquet malesuada odio, ut pellentesque nisi tempus in. Ut fermentum, augue id accumsan aliquet, dolor dui euismod elit, nec fringilla mi justo nec mauris. Duis tellus nisl, elementum et urna at, molestie condimentum eros. Sed mattis quis risus id tincidunt. Donec ultrices vestibulum vestibulum.",
      category: "Sports",
      cover: ba3,
      date: "MARCH 15, 2018",
    },
    {
      id: 4,
      title: "START YOU CUP ON TABLE OF THAT",
      desc: "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition.",
      category: "Fashion",
      cover: ba4,
      date: "February 20, 2018",
    },
    {
      id: 5,
      title: "SMART TYPE OF GAMING WITH CO-OP",
      desc: "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition.",
      category: "Sports",
      cover: ba5,
      date: "February 20, 2018",
    },
    {
      id: 6,
      title: "TEACH YOUR DRAGON HOW TO FLY",
      desc: "Magnis modipsae que lib voloratati andigen daepedor quiate ut reporemni aut labor. Laceaque quiae sitiorem ut restibusaes es tumquam core posae volor remped modis volor. Doloreiur qui commolu ptatemp dolupta orem retibusam emnis et consent accullignis lomnus. We don't want to overload you with hundreds of styles you don't want, or need. We give you a strong base to express your own creativity.",
      category: "Fashion",
      cover: ba6,
      date: "February 20, 2018",
    },
    {
      id: 7,
      title: "TEACH YOUR DRAGON HOW TO FLY",
      desc: "Magnis modipsae que lib voloratati andigen daepedor quiate ut reporemni aut labor. Laceaque quiae sitiorem ut restibusaes es tumquam core posae volor remped modis volor. Doloreiur qui commolu ptatemp dolupta orem retibusam emnis et consent accullignis lomnus. We don't want to overload you with hundreds of styles you don't want, or need. We give you a strong base to express your own creativity.",
      category: "Fashion",
      cover: ba7,
      date: "February 20, 2018",
    },
    {
      id: 8,
      title: "TEACH YOUR DRAGON HOW TO FLY",
      desc: "Magnis modipsae que lib voloratati andigen daepedor quiate ut reporemni aut labor. Laceaque quiae sitiorem ut restibusaes es tumquam core posae volor remped modis volor. Doloreiur qui commolu ptatemp dolupta orem retibusam emnis et consent accullignis lomnus. We don't want to overload you with hundreds of styles you don't want, or need. We give you a strong base to express your own creativity.",
      category: "Fashion",
      cover: ba8,
      date: "February 20, 2018",
    },
    {
      id: 9,
      title: "TEACH YOUR DRAGON HOW TO FLY",
      desc: "Magnis modipsae que lib voloratati andigen daepedor quiate ut reporemni aut labor. Laceaque quiae sitiorem ut restibusaes es tumquam core posae volor remped modis volor. Doloreiur qui commolu ptatemp dolupta orem retibusam emnis et consent accullignis lomnus. We don't want to overload you with hundreds of styles you don't want, or need. We give you a strong base to express your own creativity.",
      category: "Fashion",
      cover: ba9,
      date: "February 20, 2018",
    },
  
    {
      id: 10,
      title: "TEACH YOUR DRAGON HOW TO FLY",
      desc: "Magnis modipsae que lib voloratati andigen daepedor quiate ut reporemni aut labor. Laceaque quiae sitiorem ut restibusaes es tumquam core posae volor remped modis volor. Doloreiur qui commolu ptatemp dolupta orem retibusam emnis et consent accullignis lomnus. We don't want to overload you with hundreds of styles you don't want, or need. We give you a strong base to express your own creativity.",
      category: "Fashion",
      cover: ba10,
      date: "February 20, 2018",
    },
  ]






export const Card = () => {
  return (
    <>
        <section className='blog'>
            <div className='container grid3'>
                {blog.map((item) =>(
                    <div className='box boxItems' key={item.id}>
                    <div className='img'>
                      <img src={item.cover} alt='' />
                    </div>
                    <div className='details'>
                    <div className='tag'>
                    <AiOutlineTags className='icon' />
                    <a href='/'>#{item.category}</a>
                    </div>
                    <Link to={`/details/${item.id}`} className='link'>
                        <h3>{item.title}</h3>
                    </Link>
                    <p>{item.desc.slice(0, 180)}...</p>
                     <div className='date'>
                     <AiOutlineClockCircle  className='icon'/>
                     <label htmlFor=''>{item.date}</label>
                     <AiOutlineComment  className='icon'/>
                     <label htmlFor=''>27</label>
                     <AiOutlineShareAlt  className='icon'/>
                     <label htmlFor=''>SHARE</label>
                     </div>
                    </div>
                    </div>
                ))}
            </div>
        </section>
    </>
  )
}
