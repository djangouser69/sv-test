import { redirect } from "@sveltejs/kit";

export const prerender = false;

export const load = async ({ locals }) => {
  console.log(locals, Boolean(locals));
  //   if (!locals) {
  //     throw redirect(300, "/");
  //   }
  //   throw redirect(301, "/");
};
