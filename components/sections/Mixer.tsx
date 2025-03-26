"use client";

import { Card, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { title } from "@/components/primitives";

const Mixer = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16 bg-black text-white">
      <Card className="max-w-[1100px] w-full bg-[#131313] rounded-2xl shadow-lg px-16 py-12">
        <CardHeader className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left flex-1">
            <h1 className={title({ size: "lg" })}>I build,</h1>
            <h2 className={title({ size: "lg" })}>a lot</h2> {/* Changed xl to lg */}
            <p className="text-gray-400 text-lg mt-2">
              Web apps, mobile apps, and a lot of experiments.
            </p>
            <Button color="primary" variant="solid" className="mt-5">
              <Link href="/projects" className="text-white">
                See my work
              </Link>
            </Button>
          </div>
          {/* <div className="hidden sm:block w-px h-28 bg-gray-600 mx-8"></div>
          <div className="text-center sm:text-left flex-1">
            <h1 className={title({ size: "lg" })}>I write,</h1>
            <h2 className={title({ size: "lg" })}>a bit</h2> {/* Changed xl to lg */}
            <p className="text-gray-400 text-lg mt-2">
              A bit of everything, from binary to infinity.
            </p>
            <Button color="secondary" variant="solid" className="mt-5">
              <Link href="/blog" className="text-white">
                Read my stuffs
              </Link>
            </Button>
          </div> */}
        </CardHeader>
      </Card>
    </section>
  );
};

export default Mixer;

