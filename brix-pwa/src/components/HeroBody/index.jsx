import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AddBoxIcon from "@mui/icons-material/AddBox";

const features = [
  {
    id: "0",
    name: "10-year all-inclusive warranty",
    description: "We’ll replace it with a new one",
    icon: <AddBoxIcon className='text-white' />,
  },
  {
    id: "1",
    name: "Free shipping on returns",
    description: "Send it back for free",
    icon: <AcUnitIcon className='text-white' />,
  },
  {
    id: "2",
    name: "Free, contactless delivery",
    description: "The shipping is on us",
    icon: <AccessAlarmsIcon className='text-white' />,
  },
];

export default function HeroBody() {
  return (
    <div className='bg-gray-800'>
      <div className='py-8 max-w-7xl mx-auto divide-y divide-white flex justify-center lg:divide-y-0 lg:divide-x p-100'>
        <h1 className='text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl '>
          <span className='block text-white '>You'll find</span>
        </h1>
      </div>

      <div className='max-w-7xl mx-auto divide-y divide-gray-200 lg:py-20 lg:flex lg:justify-center lg:divide-y-0 lg:divide-x'>
        {features.map((feature) => (
          <div key={feature.id} className='py-8 lg:py-0 lg:w-1/3 lg:flex-none'>
            <div className='max-w-xs mx-auto px-4 flex items-center lg:max-w-none lg:px-8'>
              {feature.icon}
              <div className='ml-4 flex-auto flex flex-col-reverse'>
                <h3 className='font-medium text-white'>{feature.name} </h3>
                <p className='text-sm text-white'>{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
