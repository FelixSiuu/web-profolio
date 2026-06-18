import { workingExpService } from '@/services/myInfo.service'
import { utils } from '@/utils'
import { Separator } from './ui/separator'

export default async function WorkingExperience() {
  const response = await workingExpService.getWorkingExp()

  const { data, isSuccess } = response

  if (!isSuccess) return <div>加載出錯了！</div>

  return (
    <>
      {data.map((item, index) => {
        return (
          <article key={index}>
            <div className="grid grid-cols-[auto_1fr] not-last:mb-6 gap-4 py-6">
              <h3 className="font-semibold text-xl">{item.jobTitle}</h3>

              <div className="text-[14px] md:whitespace-nowrap text-right">
                <h3 className="whitespace-nowrap">
                  {item.startDate} - {!item.endDate ? 'Now' : item.endDate} <i className="italic text-[12px]">({utils.countYear(item.startDate, item.endDate)} Years)</i>
                </h3>

                <h4>{item.company}</h4>

                <small className="text-[#555555]">{item.location}</small>
              </div>

              {item.keyResponsibilities.length !== 0 && (
                <ul className=" ml-6 list-disc [&>li]:mt-2 col-span-2">
                  {item.keyResponsibilities.map((item, index) => (
                    <ResponsibilityItem key={index} {...item} />
                  ))}
                </ul>
              )}
            </div>

            {index + 1 < data.length && <Separator />}
          </article>
        )
      })}
    </>
  )
}

const ResponsibilityItem = (item: KeyResponsibility) => {
  return (
    <li>
      {item.title && <h3 className="font-medium text-lg inline-block">{item.title}:</h3>}
      <p>{item.responsibility}</p>
    </li>
  )
}
