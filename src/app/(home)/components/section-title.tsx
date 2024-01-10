
interface tilteProps{
    title: string;
}

const SectionTitle = ({title, ...prosp}: tilteProps ) => {
    return ( 
    <div className="mb-3 pl-5 uppercase mt-3">
        <p> {title} </p>
      </div>
     );
}
 
export default SectionTitle;