import { NextResponse } from "next/server";
import { headers, cookies } from 'next/headers';
import { redirect } from 'next/navigation'

export async function DELETE(req: Request, {params}: {params: {pid: string}}) {
  const pid = params.pid;

  /* Позволяет работать с заголовками */
  const headerList = headers();
  const type = headerList.get('Content-Type')

  /* Позволяет работать с куками */
  const cookiesList = cookies();
  const coo1 = cookiesList.get('Cookie_1')?.value;

  /*Даёт возможность возвращаться на страничку какую-то*/
  // redirect('/posts')

  return NextResponse.json({ pid, type, coo1 });
}