

function Contact() {
 return (
  <div className='contact-cta text-center space-y-4 border border-blue-300 rounded-xl p-6 w-full md:w-2xl bg-linear-to-r from-blue-100/50 to-violet-50/50'>
   <div className='space-y-4'>
    <h1 className='text-center text-3xl '>Travaillons Ensemble</h1>
    <p className='text-lg text-gray-500'>Vous avez un projet ? Notre équipe est prête à vous accompagner</p>
   </div>
   <div>
    <button className='text-white text-lg px-6 font-semibold rounded-lg p-3 bg-linear-to-r from-blue-600 to-violet-500 hover:scale-105 duration-200'>
     Nous Contacter
    </button>
   </div>
  </div>
 )
}

export default Contact
