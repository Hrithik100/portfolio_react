import React,{useState,useEffect} from 'react'
import portfolios from "../../assets/data/PortfolioData"
import Modal from './Modal'

const Portfolio = () => {

  const [nextItems, setNextItems] = useState(3)
  const [portfoli,setPortfoli] = useState(portfolios)
  const [selectTab, setSelectTab] = useState("All")
  const [showModal,setShowModal] = useState(false)
  const [activeId, setActiveId] = useState(null)

  const loadMore = ()=>{
    setNextItems(prev=>prev + 3)
  }

  const showModalhandle = (id) =>{
    setShowModal(true)
    setActiveId(id)
  }

  useEffect(()=>{
    if(selectTab === "All"){
      setPortfoli(portfolios)
    }

    if(selectTab === "Frontend"){
      const filteredData = portfolios.filter(item => item.category === "Frontend")
      setPortfoli(filteredData)
    }

    if(selectTab === "Full-Stack"){
      const filteredData = portfolios.filter(item => item.category === "Full-Stack")
      setPortfoli(filteredData)
    }
  },[selectTab])

  return (
    <section id='portfolio'>
      <div className='container'>
        <div className='flex items-center justify-between flex-wrap'>
            <div className='mb-7 sm:mb-0'>
                <h3 className='text-[#081e21] text-[2rem] font-[700]'>My recent projects</h3>
            </div>
            <div className='flex gap-3'>
                <button onClick={() => setSelectTab("All")} className='text-[#193256] border border-solid border-[#193256] p-2 px-4 rounded-[8px]'>All</button>
                <button onClick={() => setSelectTab("Frontend")} className='text-[#193256] border border-solid border-[#193256] p-2 px-4 rounded-[8px]'>Frontend</button>
                <button onClick={() => setSelectTab("Full-Stack")} className='text-[#193256] border border-solid border-[#193256] p-2 px-4 rounded-[8px]'>Full Stack</button>
            </div>
            <div className='flex items-center gap-4 flex-wrap mt-12'>
              {
                portfoli?.slice(0, nextItems)?.map((p,i)=>(
                  <div data-aos="fade-zoom-in" data-aos-delay="50" data-aos-duration="1000" className='group max-w-full sm:w-[48%] md:w-[31%] lg:w-[32%] relative z-[1]' key={i}>
                      <figure className='rounded-[8px] border-2 border-solid border-[#193256] h-[300px]'>
                        <img className='rounded-[10px] p-6' src={p.imgUrl} alt="" />
                      </figure>
                      <div className='w-full h-full bg-[#8873ef] bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block'>
                        <div className='w-full h-full flex items-center justify-center'>
                          <button onClick={()=>showModalhandle(p.id)} className='text-white bg-[#081e21] hover:bg-[#193256] py-2 px-4 rounded-[8px] font-[500] ease-in duration-200'>See details</button>
                        </div>
                      </div>
                  </div>
                ))
              }
            </div>
        </div>
        <div className='text-center mt-6'>
          {
            nextItems < portfoli.length && portfolios.length > 3 && (
              <button onClick={loadMore} className='text-white bg-[#081e21] hover:bg-[#193256] py-2 px-4 rounded-[8px] font-[500] ease-in duration-200'>load More</button>
            )
          }
        </div>
      </div>
        {
          showModal && <Modal setShowModal={setShowModal} activeId={activeId}/>
        }
    </section>
  )
}

export default Portfolio