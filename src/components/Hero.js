import Card from "./Card";
import MovieData from '../list.json';

console.log(MovieData[1].duration);

let hour = 0;
let minute = 0 ;
let k = 0;
for(let i =0;i<MovieData[1].duration.length ;i++){
        if(MovieData[1].duration.charAt(i) === 'H'){
            k = 1;
        }
        if(MovieData[1].duration.charAt(i) >= 0 && MovieData[1].duration.charAt(i) <= 9){
            console.log(MovieData[1].duration.charAt(i));
            if(k === 0){
                hour += MovieData[1].duration.charAt(i);
            }else{
                minute += MovieData[1].duration.charAt(i);
            }
        }
}
console.log(parseInt(hour)*60+parseInt(minute));
const Hero = ()=>{
    return(
        <section className="bg-black border border-blue-400 flex flex-col justify-center items-center">
            {   
                MovieData.map((data) => {
                    let hour = 0;
                    let minute = 0;
                    let k = 0;
                
                    for (let i = 0; i < data.duration.length; i++) {
                        if (data.duration.charAt(i) === 'H') {
                            k = 1;
                        }
                        if (
                            data.duration.charAt(i) >= '0' &&
                            data.duration.charAt(i) <= '9'
                        ) {
                            if (k === 0) {
                                hour = hour * 10 + parseInt(data.duration.charAt(i), 10);
                            } else {
                                minute = minute * 10 + parseInt(data.duration.charAt(i), 10);
                            }
                        }
                    }
                
                    const totalDurationInMinutes = hour * 60 + minute;
                
                    return (
                        <Card
                            name={data.name}
                            director={data.director[0].name}
                            datePublished={data.datePublished.slice(0, 4)}
                            description={data.description}
                            image={data.image}
                            sideImage={
                                data.trailer
                                    ? data.trailer.thumbnailUrl
                                    : 'https://via.placeholder.com/150'
                            }
                            genre={data.genre}
                            duration={totalDurationInMinutes}
                        />
                    );
                })
                
            }
        </section>
    )
};

export default Hero;