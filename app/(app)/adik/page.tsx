'use client'
import { useCount } from "@/lib/store";
import { Card, Flex, Text } from "@tremor/react";

export default function AdikPage() {
  const [count, setCount] = useCount()
  return (
    <Card className="max-w-xs">
      <Text>Hello adik</Text>
      <Flex>
        Count: {count}

      </Flex>
      <Flex>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </Flex>
    </Card>
  );
}
