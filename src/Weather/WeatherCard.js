import './WeatherCard.css';

const weatherOptions = [
    {
        URL: '../Images/day/sunny.svg',
        day: true,
        type: 'sunny',
    },
    {
        URL: '../Images/day/cloudy.svg',
        day: true,
        type: 'cloudy',
    },
    {
        URL: '../Images/day/rain.svg',
        day: true,
        type: 'rain',
    },
    {
        URL: '../Images/day/snow.svg',
        day: true,
        type: 'snow',
    },
    {
        URL: '../Images/day/storm.svg',
        day: true,
        type: 'storm',
    },
    {
        URL: '../Images/day/fog.svg',
        day: true,
        type: 'fog',
    },
    {
        URL: '../Images/night/sunny.svg',
        day: false,
        type: 'sunny',
    },
    {
        URL: '../Images/night/cloudy.svg',
        day: false,
        type: 'cloudy',
    },
    {
        URL: '../Images/night/rain.svg',
        day: false,
        type: 'rain',
    },
    {
        URL: '../Images/night/snow.svg',
        day: false,
        type: 'snow',
    },
    {
        URL: '../Images/night/storm.svg',
        day: false,
        type: 'storm',
    },
    {
        URL: '../Images/night/fog.svg',
        day: false,
        type: 'fog',
    },
]

const WeatherCard = ({day, type}) => {
    const imageSrc = weatherOptions.filter((i) => {
        console.log(i)
        return i.day === day && i.type === type;
    });
    console.log(imageSrc)
    console.log(imageSrc[0].URL)

    const imageSrcURL = imageSrc[0].URL || '';
    return (
        <section className='weather' id='weather'>
                <div className='weather__info'>75F</div>
                  <img src={imageSrcURL} alt='sunny' className='weather__image' />
              </section>
        )
}

export default WeatherCard;