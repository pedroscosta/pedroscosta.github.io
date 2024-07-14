import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Volume2 } from 'lucide-react';
import Link from 'next/link';
import { PiArrowSquareOut } from 'react-icons/pi';
import { NumberInput } from './_components/number-input';

const Page = () => {
  return (
    <div className="space-y-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle>Number input</CardTitle>
          <CardDescription>
            A number input component with a draggable icon.
            <br /> Just like the number inputs in Figma
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <div className="w-1/2 space-y-2 py-4">
            <p>Volume</p>
            <NumberInput
              icon={<Volume2 className="size-5 color text-muted-foreground" />}
              defaultValue={0}
              step={0.1}
              min={0}
              max={100}
              sensibility={0.5}
              decimalPlaces={1}
            />
          </div>
        </CardContent>
        <CardFooter className="justify-end">
          <Link
            href="https://github.com/pedroscosta/pedroscosta.github.io/blob/main/app/components/_components/number-input.tsx"
            className="border-current hover:-mb-[2px] hover:border-b-2"
          >
            Get source
            <PiArrowSquareOut className="ml-1 inline-block w-[1chem]" />
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};
export default Page;
