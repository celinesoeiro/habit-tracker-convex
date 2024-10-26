"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";

export const GetStarted = () => {
  const [amountOfMugsPerDay, setAmountOfMugsPerDay] = useState(0);

  const handleRememberMe = (e: FormEvent) => {
    e.preventDefault();

    const data = new FormData(e.target as HTMLFormElement);
    const mugCapacity = Number(data.get("mug-capacity"));

    setAmountOfMugsPerDay(2000 / mugCapacity);

    console.log({ mugCapacity });
  };

  const array = Array.from({ length: amountOfMugsPerDay }, (_, i) => i);

  console.log({ array });

  return (
    <div className="flex grow flex-col items-center gap-10 p-2 mt-5">
      <h3 className="text-xl">
        Helping you remember to keep hydrated throughout the day.
      </h3>

      <div className="max-w-lg w-full flex flex-col gap-5">
        <div className="flex flex-col gap-2 text-pretty text-lg">
          <p>
            While the amount of water may differ from women to men and other
            various reasons, to keep our body hydrated in important to our
            health.
          </p>
          <p>
            It is almost a common sense that we should drink at least 2 liters
            of water per day.
          </p>
          <p>
            So if you want to keep hydrated, just enter the capacity of your mug
            or glass and hit the button remember me, we will remember you drink
            water and count the amount of water you have drank in the day.
          </p>
        </div>

        <form
          onSubmit={handleRememberMe}
          className="flex flex-col justify-between items-center gap-5 w-full"
        >
          <fieldset className="flex flex-col gap-2 items-center">
            <input
              type="number"
              name="mug-capacity"
              className="border border-primary rounded text-white px-4 py-1"
              min={100}
              required
              max={2000}
            />
            <span className="text-sm">
              Type the capacity in milliliters of your mug or glass
            </span>
          </fieldset>
          <button
            className="bg-primary text-black px-4 py-2 rounded"
            type="submit"
          >
            Remember me
          </button>
        </form>

        {amountOfMugsPerDay > 0 && (
          <div className="flex flex-col gap-2 items-center">
            <p>
              You should drink at least {amountOfMugsPerDay} mugs of water per
              day
            </p>
            <div className="flex flex-row gap-2 flex-wrap items-center justify-center">
              {array.map((_, i) => (
                <Image
                  src="/empty-glass.svg"
                  alt="empty-glass"
                  key={`empty-glass-${i}`}
                  width={40}
                  height={40}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
