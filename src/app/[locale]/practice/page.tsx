import { Theme, Text, Badge, Tooltip } from '@radix-ui/themes'
export default function Practice() {
  return (
    <div className="flex flex-col md:flex-row gap-2">
      <Badge>
        <Text>Hello</Text>
      </Badge>
      <Tooltip content="Add to library">
        <Badge>Hoverable</Badge>
      </Tooltip>
      <Text>wadap</Text>
    </div>
  )
}
