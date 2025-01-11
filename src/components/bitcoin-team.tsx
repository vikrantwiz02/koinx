import Image from 'next/image'

interface TeamMemberProps {
  name: string
  designation: string
  description: string
  imageSrc: string
}

function TeamMember({ name, designation, description, imageSrc }: TeamMemberProps) {
  return (
    <div className="bg-[#E8F4FD] rounded-lg p-6 mb-5">
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex flex-col items-center sm:items-start shrink-0">
          <div className="w-[120px] h-[120px] sm:w-[100px] sm:h-[100px] mb-2 relative">
            <Image
              src={imageSrc}
              alt={name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h4 className="text-[16px] font-semibold text-[#0F1629] mb-1">{name}</h4>
            <p className="text-[14px] text-[#788F9B]">{designation}</p>
          </div>
        </div>
        <p className="text-[14px] leading-[160%] text-[#0F1629] flex-1 text-center sm:text-left">
          {description}
        </p>
      </div>
    </div>
  )
}

export function BitcoinTeam() {
  const teamMembers = [
    {
      name: "John Smith",
      designation: "Designation here",
      description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
      imageSrc: "/john-smith.svg"
    },
    {
      name: "Elina Williams",
      designation: "Designation here",
      description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
      imageSrc: "/ellina-williams.svg"
    },
    {
      name: "John Smith",
      designation: "Designation here",
      description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
      imageSrc: "/john-smith2.svg"
    }
  ]

  return (
    <div className="bg-white rounded-lg p-6 mt-5">
      <h2 className="text-2xl font-semibold text-[#0F1629] mb-6">Team</h2>
      <p className="text-base text-[#3E424A] leading-7 mb-6">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
      </p>
      
      <div>
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            designation={member.designation}
            description={member.description}
            imageSrc={member.imageSrc}
          />
        ))}
      </div>
    </div>
  )
}

