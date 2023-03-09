// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

// const catG = (male, female) => {
//       //LENGTH
//       const {length1, wire1} = male;
//       const {length2, wire2} = female;

//       var longhair;
  
//       if (length1 === "long" && length2 === "long") {
//         longhair = 1;
//       } else if (length1 === "short" || length2 === "short") {
//         longhair = 0;
//       } else if (length1 === "long" || length2 === "long") {
//         longhair = 0.5;
//       } else {
//         longhair = 0.25;
//       }
//       var shorthair = 1 - longhair;
  
//       //WIREHAIR
//       var wirehair;
  
//       if (wire1 === "wire" || wire2 === 'wire') {
//         wirehair = 1;
//       } else if (wire1 === "nowire" && wire2 === 'nowire') {
//         wirehair = 0;
//       } else if (wire1 === "wirehet" && wire2 === "wirehet") {
//         wirehair = 0.75;
//       } else {
//         wirehair = 0.5;
//       }
  
//       var nowirehair = 1 - wirehair;
  
  
//       //LAPERM
  
//       var perm1 = $("#perm1").val();
//       var perm2 = $("#perm2").val();
//       var laperm;
  
//       if (perm1 === "perm" || perm2 === 'perm') {
//         laperm = 1;
//       } else if (perm1 === "noperm" && perm2 === 'noperm') {
//         laperm = 0;
//       } else if (perm1 === "permhet" && perm2 === "permhet") {
//         laperm = 0.75;
//       } else {
//         laperm = 0.5;
//       }
  
//       var nolaperm = 1 - laperm;
  
  
//       //CORNISH
  
//       var crex1 = $("#crex1").val();
//       var crex2 = $("#crex2").val();
//       var cornish;
  
//       if (crex1 === "crex" && crex2 === 'crex') {
//         cornish = 1;
//       } else if (crex1 === "nocrex" || crex2 === 'nocrex') {
//         cornish = 0;
//       } else if (crex1 === "crexhet" && crex2 === "crexhet") {
//         cornish = 0.25;
//       } else {
//         cornish = 0.5;
//       }
  
//       var nocornish = 1 - cornish;
  
//       // LYKOI
      
      
//       var lykoi1 = $("#lykoi1").val();
//       var lykoi2 = $("#lykoi2").val();
//       var lykoi;
  
//       if (lykoi1 === "lykoi" && lykoi2 === "lykoi") {
//         lykoi = 1;
//       } else if (lykoi1 === "nolykoi" || lykoi2 === "nolykoi") {
//         lykoi = 0;
//       } else if (lykoi1 === "lykoi" || lykoi2 === "lykoi") {
//         lykoi = 0.5;
//       } else {
//         lykoi = 0.25;
//       }
  
//       var nonlykoi = 1 - lykoi;
      
  
//       //REX/HAIRLESS
  
//       var rexsphynx1 = $("#rexsphynx1").val();
//       var rexsphynx2 = $("#rexsphynx2").val();
//       var selkirk = 0;
//       var sphynx = 0;
//       var devon = 0;
  
//       if (rexsphynx1 === "srex" || rexsphynx2 === "srex") {
//         selkirk = 1;
//       } else if (rexsphynx1 === "srexhet" || rexsphynx2 === "srexhet") {
//         if (rexsphynx1 === "srexhet" && rexsphynx2 === "srexhet") {
//           selkirk = 0.75;
//         } else if (rexsphynx1 === "srexsphynx" || rexsphynx2 === "srexsphynx" || rexsphynx1 === "srexdrex" || rexsphynx2 === "srexdrex") {
//           selkirk = 0.75;
//         } else {
//           selkirk = 0.5;
//         }
//       } else if (rexsphynx1 === "srexsphynx" || rexsphynx2 === "srexsphynx") {
//         if (rexsphynx1 === "srexsphynx" && rexsphynx2 === "srexsphynx") {
//           selkirk = 0.75;
//           sphynx = 0.25;
//         } else if (rexsphynx1 === "srexdrex" || rexsphynx2 === "srexdrex") {
//           selkirk = 0.75;
//           sphynx = 0.75;
//         } else if (rexsphynx1 === "normal" || rexsphynx2 === "normal") {
//           selkirk = 0.5;
//         } else if (rexsphynx1 === "sphynxhet" || rexsphynx2 === "sphynxhet" || rexsphynx1 === "drexhet" || rexsphynx2 === "drexhet") {
//           selkirk = 0.5;
//           sphynx = 0.25;
//         } else {
//           selkirk = 0.5;
//           sphynx = 0.5;
//         }
//       } else if (rexsphynx1 === "srexdrex" || rexsphynx2 === "srexdrex") {
//         if (rexsphynx1 === "srexdrex" && rexsphynx2 === "srexdrex") {
//           selkirk = 0.75;
//           devon = 0.25;
//         } else if (rexsphynx1 === "normal" || rexsphynx2 === "normal") {
//           selkirk = 0.5;
//         } else if (rexsphynx1 === "sphynxhet" || rexsphynx2 === "sphynxhet") {
//           selkirk = 0.5;
//           sphynx = 0.25;
//         } else if (rexsphynx1 === "drexhet" || rexsphynx2 === "drexhet") {
//           selkirk = 0.5;
//           devon = 0.25;
//         } else if (rexsphynx1 === "sphynx" || rexsphynx2 === "sphynx") {
//           selkirk = 0.5;
//           sphynx = 0.5;
//         } else if (rexsphynx1 === "sphynxdrex" || rexsphynx2 === "sphynxdrex") {
//           selkirk = 0.5;
//           sphynx = 0.25;
//           devon = 0.25;
//         } else if (rexsphynx1 === "drex" || rexsphynx2 === "drex") {
//           selkirk = 0.5;
//           devon = 0.5;
//         }
//       } else if (rexsphynx1 === "normal" || rexsphynx2 === "normal") {
//         //all normal
//       } else if (rexsphynx1 === "sphynxhet" || rexsphynx2 === "sphynxhet") {
//         if (rexsphynx1 === "sphynxhet" && rexsphynx2 === "sphynxhet") {
//           sphynx = 0.25;
//         } else if (rexsphynx1 === "drexhet" || rexsphynx2 === "drexhet") {
//           sphynx = 0.25;
//         } else {
//           sphynx = 0.5;
//         }
//       } else if (rexsphynx1 === "drexhet" || rexsphynx2 === "drexhet") {
//         if (rexsphynx1 === "drexhet" && rexsphynx2 === "drexhet") {
//           devon = 0.25;
//         } else if (rexsphynx1 === "sphynx" || rexsphynx2 === "sphynx") {
//           sphynx = 0.5;
//         } else if (rexsphynx1 === "sphynxdrex" || rexsphynx2 === "sphynxdrex") {
//           sphynx = 0.25;
//           devon = 0.25;
//         } else if (rexsphynx1 === "drex" || rexsphynx2 === "drex") {
//           devon = 0.5;
//         }
//       } else if (rexsphynx1 === "sphynx" || rexsphynx2 === "sphynx") {
//         sphynx = 1;
//       } else if (rexsphynx1 === "sphynxdrex" || rexsphynx2 === "sphynxdrex") {
//         if (rexsphynx1 === "sphynxdrex" && rexsphynx2 === "sphynxdrex") {
//           sphynx = 0.75;
//           devon = 0.25;
//         } else if (rexsphynx1 === "drex" || rexsphynx2 === "drex") {
//           sphynx = 0.5;
//           devon = 0.5;
//         }
//       } else if (rexsphynx1 === "drex" && rexsphynx2 === "drex") {
//         devon = 1;
//       }
//       var norexsphynx = 1 - selkirk - devon - sphynx;
  
  
  
//       //PARSE PELT TYPES
  
//       var hairless = sphynx;
  
//       var shortnormal = shorthair * nocornish * nowirehair * nolaperm * norexsphynx * nonlykoi;
//       var longnormal = longhair * nocornish * nowirehair * nolaperm * norexsphynx * nonlykoi;
  
//       var shortlp = shorthair * nocornish * nowirehair * laperm * norexsphynx * nonlykoi;
//       var longlp = longhair * nocornish * nowirehair * laperm * norexsphynx * nonlykoi;
  
//       var shortwh = shorthair * nocornish * wirehair * nolaperm * norexsphynx * nonlykoi;
//       var longwh = longhair * nocornish * wirehair * nolaperm * norexsphynx * nonlykoi;
  
//       var shortlpwh = shorthair * nocornish * wirehair * laperm * norexsphynx * nonlykoi;
//       var longlpwh = longhair * nocornish * wirehair * laperm * norexsphynx * nonlykoi;
  
//       var shortcornish = cornish * shorthair * (norexsphynx + selkirk + devon) * nolaperm * nowirehair * nonlykoi;
//       var longcornish = cornish * longhair * (norexsphynx + selkirk + devon) * nolaperm * nowirehair * nonlykoi;
//       var shortwhcornish = cornish * shorthair * (norexsphynx + selkirk + devon) * nolaperm * wirehair * nonlykoi;
//       var longwhcornish = cornish * longhair * (norexsphynx + selkirk + devon) * nolaperm * wirehair * nonlykoi;
//       var shortlpcornish = cornish * shorthair * (norexsphynx + selkirk + devon) * laperm * nowirehair * nonlykoi;
//       var longlpcornish = cornish * longhair * (norexsphynx + selkirk + devon) * laperm * nowirehair * nonlykoi;
//       var shortwhlpcornish = cornish * shorthair * (norexsphynx + selkirk + devon) * laperm * wirehair * nonlykoi;
//       var longwhlpcornish = cornish * longhair * (norexsphynx + selkirk + devon) * laperm * wirehair * nonlykoi;
  
//       var shortselkirk = shorthair * selkirk * nocornish * nowirehair * nolaperm * nonlykoi;
//       var longselkirk = longhair * selkirk * nocornish * nowirehair * nolaperm * nonlykoi;
//       var shortwhselkirk = shorthair * selkirk * nocornish * wirehair * nolaperm * nonlykoi;
//       var longwhselkirk = longhair * selkirk * nocornish * wirehair * nolaperm * nonlykoi;
//       var shortlpselkirk = shorthair * selkirk * nocornish * nowirehair * laperm * nonlykoi;
//       var longlpselkirk = longhair * selkirk * nocornish * nowirehair * laperm * nonlykoi;
//       var shortlpwhselkirk = shorthair * selkirk * nocornish * wirehair * laperm * nonlykoi;
//       var longlpwhselkirk = longhair * selkirk * nocornish * wirehair * laperm * nonlykoi;
  
//       var shortdevon = shorthair * devon * nocornish * nowirehair * nolaperm * nonlykoi;
//       var longdevon = longhair * devon * nocornish * nowirehair * nolaperm * nonlykoi;
//       var shortwhdevon = shorthair * devon * nocornish * wirehair * nolaperm * nonlykoi;
//       var longwhdevon = longhair * devon * nocornish * wirehair * nolaperm * nonlykoi;
//       var shortlpdevon = shorthair * devon * nocornish * nowirehair * laperm * nonlykoi;
//       var longlpdevon = longhair * devon * nocornish * nowirehair * laperm * nonlykoi;
//       var shortlpwhdevon = shorthair * devon * nocornish * wirehair * laperm * nonlykoi;
//       var longlpwhdevon = longhair * devon * nocornish * wirehair * laperm * nonlykoi;
  
      
//     var shortly = shorthair * nocornish * nowirehair * nolaperm * norexsphynx * lykoi;
//       var longly = longhair * nocornish * nowirehair * nolaperm * norexsphynx * lykoi;
  
//       var shortlply = shorthair * nocornish * nowirehair * laperm * norexsphynx * lykoi;
//       var longlply = longhair * nocornish * nowirehair * laperm * norexsphynx * lykoi;
  
//       var shortwhly = shorthair * nocornish * wirehair * nolaperm * norexsphynx * lykoi;
//       var longwhly = longhair * nocornish * wirehair * nolaperm * norexsphynx * lykoi;
  
//       var shortlpwhly = shorthair * nocornish * wirehair * laperm * norexsphynx * lykoi;
//       var longlpwhly = longhair * nocornish * wirehair * laperm * norexsphynx * lykoi;
  
//       var shortcornishly = cornish * shorthair * (norexsphynx + selkirk + devon) * nolaperm * nowirehair * lykoi;
//       var longcornishly = cornish * longhair * (norexsphynx + selkirk + devon) * nolaperm * nowirehair * lykoi;
//       var shortwhcornishly = cornish * shorthair * (norexsphynx + selkirk + devon) * nolaperm * wirehair * lykoi;
//       var longwhcornishly = cornish * longhair * (norexsphynx + selkirk + devon) * nolaperm * wirehair * lykoi;
//       var shortlpcornishly = cornish * shorthair * (norexsphynx + selkirk + devon) * laperm * nowirehair * lykoi;
//       var longlpcornishly = cornish * longhair * (norexsphynx + selkirk + devon) * laperm * nowirehair * lykoi;
//       var shortwhlpcornishly = cornish * shorthair * (norexsphynx + selkirk + devon) * laperm * wirehair * lykoi;
//       var longwhlpcornishly = cornish * longhair * (norexsphynx + selkirk + devon) * laperm * wirehair * lykoi;
  
//       var shortselkirkly = shorthair * selkirk * nocornish * nowirehair * nolaperm * lykoi;
//       var longselkirkly = longhair * selkirk * nocornish * nowirehair * nolaperm * lykoi;
//       var shortwhselkirkly = shorthair * selkirk * nocornish * wirehair * nolaperm * lykoi;
//       var longwhselkirkly = longhair * selkirk * nocornish * wirehair * nolaperm * lykoi;
//       var shortlpselkirkly = shorthair * selkirk * nocornish * nowirehair * laperm * lykoi;
//       var longlpselkirkly = longhair * selkirk * nocornish * nowirehair * laperm * lykoi;
//       var shortlpwhselkirkly = shorthair * selkirk * nocornish * wirehair * laperm * lykoi;
//       var longlpwhselkirkly = longhair * selkirk * nocornish * wirehair * laperm * lykoi;
  
//       var shortdevonly = shorthair * devon * nocornish * nowirehair * nolaperm * lykoi;
//       var longdevonly = longhair * devon * nocornish * nowirehair * nolaperm * lykoi;
//       var shortwhdevonly = shorthair * devon * nocornish * wirehair * nolaperm * lykoi;
//       var longwhdevonly = longhair * devon * nocornish * wirehair * nolaperm * lykoi;
//       var shortlpdevonly = shorthair * devon * nocornish * nowirehair * laperm * lykoi;
//       var longlpdevonly = longhair * devon * nocornish * nowirehair * laperm * lykoi;
//       var shortlpwhdevonly = shorthair * devon * nocornish * wirehair * laperm * lykoi;
//       var longlpwhdevonly = longhair * devon * nocornish * wirehair * laperm * lykoi;
  
  
//       // ADD NONZEROS TO ARRAY
  
//       var pelts = [];
  
//       if (hairless !== 0) {
//         pelts.push(hairless * 100 + "% hairless");
//       }
  
//       if (shortnormal !== 0) {
//         pelts.push(shortnormal * 100 + "% shorthair");
//       }
  
//       if (longnormal !== 0) {
//         pelts.push(longnormal * 100 + "% longhair");
//       }
  
//       if (shortlp !== 0) {
//         pelts.push(shortlp * 100 + "% shorthair LaPerm");
//       }
  
//       if (longlp !== 0) {
//         pelts.push(longlp * 100 + "% longhair LaPerm");
//       }
  
//       if (shortwh !== 0) {
//         pelts.push(shortwh * 100 + "% short wirehair");
//       }
  
//       if (longwh !== 0) {
//         pelts.push(longwh * 100 + "% long wirehair");
//       }
  
//       if (shortlpwh !== 0) {
//         pelts.push(shortlpwh * 100 + "% short wirehair LaPerm");
//       }
  
//       if (longlpwh !== 0) {
//         pelts.push(longlpwh * 100 + "% long wirehair LaPerm");
//       }
  
//       if (shortcornish !== 0) {
//         pelts.push(shortcornish * 100 + "% shorthair Cornish rex");
//       }
  
//       if (longcornish !== 0) {
//         pelts.push(longcornish * 100 + "% longhair Cornish rex");
//       }
  
//       if (shortlpcornish !== 0) {
//         pelts.push(shortlpcornish * 100 + "% shorthair LaPerm + Cornish rex");
//       }
  
//       if (longlpcornish !== 0) {
//         pelts.push(longlpcornish * 100 + "% longhair LaPerm + Cornish rex");
//       }
  
//       if (shortwhcornish !== 0) {
//         pelts.push(shortwhcornish * 100 + "% short wirehair Cornish rex");
//       }
  
//       if (longwhcornish !== 0) {
//         pelts.push(longwhcornish * 100 + "% long wirehair Cornish rex");
//       }
  
//       if (shortwhlpcornish !== 0) {
//         pelts.push(shortwhlpcornish * 100 + "% short wirehair LaPerm + Cornish rex");
//       }
  
//       if (longwhlpcornish !== 0) {
//         pelts.push(longwhlpcornish * 100 + "% long wirehair LaPerm + Cornish rex");
//       }
  
//       if (shortselkirk !== 0) {
//         pelts.push(shortselkirk * 100 + "% shorthair Selkirk rex");
//       }
  
//       if (longselkirk !== 0) {
//         pelts.push(longselkirk * 100 + "% longhair Selkirk rex");
//       }
  
//       if (shortwhselkirk !== 0) {
//         pelts.push(shortwhselkirk * 100 + "% short wirehair Selkirk rex");
//       }
  
//       if (longwhselkirk !== 0) {
//         pelts.push(longwhselkirk * 100 + "% long wirehair Selkirk rex");
//       }
  
//       if (shortlpselkirk !== 0) {
//         pelts.push(shortlpselkirk * 100 + "% shorthair LaPerm x Selkirk rex");
//       }
  
//       if (longlpselkirk !== 0) {
//         pelts.push(longlpselkirk * 100 + "% longhair LaPerm + Selkirk rex");
//       }
  
//       if (shortlpwhselkirk !== 0) {
//         pelts.push(shortlpwhselkirk * 100 + "% short wirehair LaPerm + Selkirk rex");
//       }
  
//       if (longlpwhselkirk !== 0) {
//         pelts.push(longlpwhselkirk * 100 + "% long wirehair LaPerm + Selkirk rex");
//       }
  
//       if (shortdevon !== 0) {
//         pelts.push(shortdevon * 100 + "% shorthair Devon rex");
//       }
  
//       if (longdevon !== 0) {
//         pelts.push(longdevon * 100 + "% longhair Devon rex");
//       }
  
//       if (shortwhdevon !== 0) {
//         pelts.push(shortwhdevon * 100 + "% short wirehair Devon rex");
//       }
  
//       if (longwhdevon !== 0) {
//         pelts.push(longwhdevon * 100 + "% long wirehair Devon rex");
//       }
  
//       if (shortlpdevon !== 0) {
//         pelts.push(shortlpdevon * 100 + "% shorthair LaPerm + Devon rex");
//       }
  
//       if (longlpdevon !== 0) {
//         pelts.push(longlpdevon * 100 + "% longhair LaPerm + Devon rex");
//       }
  
//       if (shortlpwhdevon !== 0) {
//         pelts.push(shortlpwhdevon * 100 + "% short wirehair LaPerm + Devon rex");
//       }
  
//       if (longlpwhdevon !== 0) {
//         pelts.push(longlpwhdevon * 100 + "% long wirehair LaPerm + Devon rex");
//       }
  
//     if (shortly !== 0) {
//         pelts.push(shortly * 100 + "% shorthair Lykoi");
//       }
  
//       if (longly !== 0) {
//         pelts.push(longly * 100 + "% longhair Lykoi");
//       }
  
//       if (shortlply !== 0) {
//         pelts.push(shortlply * 100 + "% shorthair LaPerm + Lykoi");
//       }
  
//       if (longlply !== 0) {
//         pelts.push(longlply * 100 + "% longhair LaPerm + Lykoi");
//       }
  
//       if (shortwhly !== 0) {
//         pelts.push(shortwhly * 100 + "% short wirehair Lykoi");
//       }
  
//       if (longwhly !== 0) {
//         pelts.push(longwhly * 100 + "% long wirehair Lykoi");
//       }
  
//       if (shortlpwhly !== 0) {
//         pelts.push(shortlpwhly * 100 + "% short wirehair LaPerm + Lykoi");
//       }
  
//       if (longlpwhly !== 0) {
//         pelts.push(longlpwhly * 100 + "% long wirehair LaPerm + Lykoi");
//       }
  
//       if (shortcornishly !== 0) {
//         pelts.push(shortcornishly * 100 + "% shorthair Cornish rex + Lykoi");
//       }
  
//       if (longcornishly !== 0) {
//         pelts.push(longcornishly * 100 + "% longhair Cornish rex + Lykoi");
//       }
  
//       if (shortlpcornishly !== 0) {
//         pelts.push(shortlpcornishly * 100 + "% shorthair LaPerm + Cornish rex + Lykoi");
//       }
  
//       if (longlpcornishly !== 0) {
//         pelts.push(longlpcornishly * 100 + "% longhair LaPerm + Cornish rex + Lykoi");
//       }
  
//       if (shortwhcornishly !== 0) {
//         pelts.push(shortwhcornishly * 100 + "% short wirehair Cornish rex + Lykoi");
//       }
  
//       if (longwhcornishly !== 0) {
//         pelts.push(longwhcornishly * 100 + "% long wirehair Cornish rex + Lykoi");
//       }
  
//       if (shortwhlpcornishly !== 0) {
//         pelts.push(shortlpcornishly * 100 + "% short wirehair LaPerm + Cornish rex + Lykoi");
//       }
  
//       if (longwhlpcornishly !== 0) {
//         pelts.push(longlpcornishly * 100 + "% long wirehair LaPerm + Cornish rex + Lykoi");
//       }
  
//       if (shortselkirkly !== 0) {
//         pelts.push(shortselkirkly * 100 + "% shorthair Selkirk rex + Lykoi");
//       }
  
//       if (longselkirkly !== 0) {
//         pelts.push(longselkirkly * 100 + "% longhair Selkirk rex + Lykoi");
//       }
  
//       if (shortwhselkirkly !== 0) {
//         pelts.push(shortwhselkirkly * 100 + "% short wirehair Selkirk rex + Lykoi");
//       }
  
//       if (longwhselkirkly !== 0) {
//         pelts.push(longwhselkirkly * 100 + "% long wirehair Selkirk rex + Lykoi");
//       }
  
//       if (shortlpselkirkly !== 0) {
//         pelts.push(shortlpselkirkly * 100 + "% shorthair LaPerm x Selkirk rex + Lykoi");
//       }
  
//       if (longlpselkirkly !== 0) {
//         pelts.push(longlpselkirkly * 100 + "% longhair LaPerm + Selkirk rex + Lykoi");
//       }
  
//       if (shortlpwhselkirkly !== 0) {
//         pelts.push(shortlpwhselkirkly * 100 + "% short wirehair LaPerm + Selkirk rex + Lykoi");
//       }
  
//       if (longlpwhselkirkly !== 0) {
//         pelts.push(longlpwhselkirkly * 100 + "% long wirehair LaPerm + Selkirk rex + Lykoi");
//       }
  
//       if (shortdevonly !== 0) {
//         pelts.push(shortdevonly * 100 + "% shorthair Devon rex + Lykoi");
//       }
  
//       if (longdevonly !== 0) {
//         pelts.push(longdevonly * 100 + "% longhair Devon rex + Lykoi");
//       }
  
//       if (shortwhdevonly !== 0) {
//         pelts.push(shortwhdevonly * 100 + "% short wirehair Devon rex + Lykoi");
//       }
  
//       if (longwhdevonly !== 0) {
//         pelts.push(longwhdevonly * 100 + "% long wirehair Devon rex + Lykoi");
//       }
  
//       if (shortlpdevonly !== 0) {
//         pelts.push(shortlpdevonly * 100 + "% shorthair LaPerm + Devon rex + Lykoi");
//       }
  
//       if (longlpdevonly !== 0) {
//         pelts.push(longlpdevonly * 100 + "% longhair LaPerm + Devon rex + Lykoi");
//       }
  
//       if (shortlpwhdevonly !== 0) {
//         pelts.push(shortlpwhdevonly * 100 + "% short wirehair LaPerm + Devon rex + Lykoi");
//       }
  
//       if (longlpwhdevonly !== 0) {
//         pelts.push(longlpwhdevonly * 100 + "% long wirehair LaPerm + Devon rex + Lykoi");
//       }
  
//       if ($('#linebreak').is(':checked')) {
//         return pelts.join(", <br>");
//       } else {
//         return pelts.join(", ");
//       }
  
  
    
  
//     //START BASE COLORS
  
  
//     //RED
  
//     var red1 = $("#red1").val();
//     var red2 = $("#red2").val();
//     var redmolly = 0;
//     var tortmolly = 0;
//     var redtom = 0;
  
//     if (red2 === "red") {
//       if (red1 === "red") {
//         redmolly = 1;
//         redtom = 1;
//       } else {
//         tortmolly = 1;
//         redtom = 1;
//       }
//     } else if (red2 === "notred" && red1 === "red") {
//       tortmolly = 1;
//     } else if (red2 === "tortie") {
//       if (red1 === "red") {
//         redmolly = 0.5;
//         tortmolly = 0.5;
//         redtom = 0.5;
//       } else {
//         tortmolly = 0.5;
//         redtom = 0.5;
//       }
//     }
  
//     var notredtom = 1 - redtom;
//     var notredmolly = 1 - redmolly - tortmolly;
  
//     //EUMELANIN
  
//     var eum1 = $("#eum1").val();
//     var eum2 = $("#eum2").val();
//     var chocolate = 0;
//     var cinnamon = 0;
  
//     if (eum1 === "blbl" || eum2 === "blbl") {
//       //all black
//     } else if (eum1 === "blch" || eum2 === "blch") {
//       if (eum1 === "blch" && eum2 === "blch") {
//         chocolate = 0.25;
//       } else if (eum1 === "blci" || eum2 === "blci") {
//         chocolate = 0.25;
//       } else {
//         chocolate = 0.5;
//       }
//     } else if (eum1 === "blci" || eum2 === "blci") {
//       if (eum1 === "blci" && eum2 === "blci") {
//         cinnamon = 0.25;
//       } else if (eum1 === "chch" || eum2 === "chch") {
//         chocolate = 0.5;
//       } else if (eum1 === "chci" || eum2 === "chci") {
//         chocolate = 0.25;
//         cinnamon = 0.25;
//       } else {
//         cinnamon = 0.5;
//       }
//     } else if (eum1 === "chch" || eum2 === "chch") {
//       chocolate = 1;
//     } else if (eum1 === "chci" || eum2 === "chci") {
//       if (eum1 === "chci" && eum2 === "chci") {
//         chocolate = 0.75;
//         cinnamon = 0.25;
//       } else {
//         chocolate = 0.5;
//         cinnamon = 0.5;
//       }
//     } else {
//       cinnamon = 1;
//     }
//     var black = 1 - chocolate - cinnamon;
  
  
//     //DILUTE
  
//     var dilute1 = $("#dilute1").val();
//     var dilute2 = $("#dilute2").val();
//     var dilute;
  
//     if (dilute1 === "dilute" && dilute2 === 'dilute') {
//       dilute = 1;
//     } else if (dilute1 === "nodilute" || dilute2 === 'nodilute') {
//       dilute = 0;
//     } else if (dilute1 === "dilute" || dilute2 === "dilute") {
//       dilute = 0.5;
//     } else {
//       dilute = 0.25;
//     }
  
//     var notdilute = 1 - dilute;
  
  
//     //CARAMEL
  
//     var caramel1 = $("#caramel1").val();
//     var caramel2 = $("#caramel2").val();
//     var caramel;
  
//     if (caramel1 === "nocaramel" && caramel2 === 'nocaramel') {
//       caramel = 0;
//     } else if (caramel1 === "caramel" || caramel2 === 'caramel') {
//       caramel = 1;
//     } else if (caramel1 === "nocaramel" || caramel2 === "nocaramel") {
//       caramel = 0.5;
//     } else {
//       caramel = 0.75;
//     }
  
//     var notcaramel = 1 - caramel;
  
  
//     //PARSE COLORS AND ADD TO ARRAYS
  
//     function basecolorm() {
//       var blackm = notredtom * black * notdilute;
//       var chocm = notredtom * chocolate * notdilute;
//       var cinnm = notredtom * cinnamon * notdilute;
//       var redm = redtom * notdilute;
//       var bluem = notredtom * black * dilute * notcaramel;
//       var lilacm = notredtom * chocolate * dilute * notcaramel;
//       var fawnm = notredtom * cinnamon * dilute * notcaramel;
//       var creamm = redtom * dilute * notcaramel;
//       var bluecaram = notredtom * black * dilute * caramel;
//       var lilaccaram = notredtom * chocolate * dilute * caramel;
//       var fawncaram = notredtom * cinnamon * dilute * caramel;
//       var apricotm = redtom * dilute * caramel;
  
//       var colorm = [];
  
//       if (blackm !== 0) {
//         colorm.push(blackm * 100 + "% black");
//       }
  
//       if (chocm !== 0) {
//         colorm.push(chocm * 100 + "% chocolate");
//       }
  
//       if (cinnm !== 0) {
//         colorm.push(cinnm * 100 + "% cinnamon");
//       }
  
//       if (redm !== 0) {
//         colorm.push(redm * 100 + "% red");
//       }
  
//       if (bluem !== 0) {
//         colorm.push(bluem * 100 + "% blue");
//       }
  
//       if (lilacm !== 0) {
//         colorm.push(lilacm * 100 + "% lilac");
//       }
  
//       if (fawnm !== 0) {
//         colorm.push(fawnm * 100 + "% fawn");
//       }
  
//       if (creamm !== 0) {
//         colorm.push(creamm * 100 + "% cream");
//       }
  
//       if (bluecaram !== 0) {
//         colorm.push(bluecaram * 100 + "% blue caramel");
//       }
  
//       if (lilaccaram !== 0) {
//         colorm.push(lilaccaram * 100 + "% lilac caramel");
//       }
  
//       if (fawncaram !== 0) {
//         colorm.push(fawncaram * 100 + "% fawn caramel");
//       }
  
//       if (apricotm !== 0) {
//         colorm.push(apricotm * 100 + "% apricot");
//       }
  
//       if ($('#linebreak').is(':checked')) {
//         return colorm.join(", <br>");
//       } else {
//         return colorm.join(", ");
//       }
  
//     }
  
  
//     function basecolorf() {
//       var blackf = notredmolly * black * notdilute;
//       var chocf = notredmolly * chocolate * notdilute;
//       var cinnf = notredmolly * cinnamon * notdilute;
//       var redf = redmolly * notdilute;
//       var bluef = notredmolly * black * dilute * notcaramel;
//       var lilacf = notredmolly * chocolate * dilute * notcaramel;
//       var fawnf = notredmolly * cinnamon * dilute * notcaramel;
//       var creamf = redmolly * dilute * notcaramel;
//       var bluecaraf = notredmolly * black * dilute * caramel;
//       var lilaccaraf = notredmolly * chocolate * dilute * caramel;
//       var fawncaraf = notredmolly * cinnamon * dilute * caramel;
//       var apricotf = redmolly * dilute * caramel;
  
//       var blacktort = tortmolly * black * notdilute;
//       var choctort = tortmolly * chocolate * notdilute;
//       var cinntort = tortmolly * cinnamon * notdilute;
//       var bluetort = tortmolly * black * dilute * notcaramel;
//       var lilactort = tortmolly * chocolate * dilute * notcaramel;
//       var fawntort = tortmolly * cinnamon * dilute * notcaramel;
//       var bluecaratort = tortmolly * black * dilute * caramel;
//       var lilaccaratort = tortmolly * chocolate * dilute * caramel;
//       var fawncaratort = tortmolly * cinnamon * dilute * caramel;
  
//       var colorf = [];
  
//       if (blackf !== 0) {
//         colorf.push(blackf * 100 + "% black");
//       }
  
//       if (chocf !== 0) {
//         colorf.push(chocf * 100 + "% chocolate");
//       }
  
//       if (cinnf !== 0) {
//         colorf.push(cinnf * 100 + "% cinnamon");
//       }
  
//       if (redf !== 0) {
//         colorf.push(redf * 100 + "% red");
//       }
  
//       if (bluef !== 0) {
//         colorf.push(bluef * 100 + "% blue");
//       }
  
//       if (lilacf !== 0) {
//         colorf.push(lilacf * 100 + "% lilac");
//       }
  
//       if (fawnf !== 0) {
//         colorf.push(fawnf * 100 + "% fawn");
//       }
  
//       if (creamf !== 0) {
//         colorf.push(creamf * 100 + "% cream");
//       }
  
//       if (bluecaraf !== 0) {
//         colorf.push(bluecaraf * 100 + "% blue caramel");
//       }
  
//       if (lilaccaraf !== 0) {
//         colorf.push(lilaccaraf * 100 + "% lilac caramel");
//       }
  
//       if (fawncaraf !== 0) {
//         colorf.push(fawncaraf * 100 + "% fawn caramel");
//       }
  
//       if (apricotf !== 0) {
//         colorf.push(apricotf * 100 + "% apricot");
//       }
  
//       if (blacktort !== 0) {
//         colorf.push(blacktort * 100 + "% tortoiseshell");
//       }
  
//       if (choctort !== 0) {
//         colorf.push(choctort * 100 + "% chocolate tortie");
//       }
  
//       if (cinntort !== 0) {
//         colorf.push(cinntort * 100 + "% cinnamon tortie");
//       }
  
//       if (bluetort !== 0) {
//         colorf.push(bluetort * 100 + "% dilute tortie");
//       }
  
//       if (lilactort !== 0) {
//         colorf.push(lilactort * 100 + "% lilac tortie");
//       }
  
//       if (fawntort !== 0) {
//         colorf.push(fawntort * 100 + "% fawn tortie");
//       }
  
//       if (bluecaratort !== 0) {
//         colorf.push(bluecaratort * 100 + "% blue caramel tortie");
//       }
  
//       if (lilaccaratort !== 0) {
//         colorf.push(lilaccaratort * 100 + "% lilac caramel tortie");
//       }
  
//       if (fawncaratort !== 0) {
//         colorf.push(fawncaratort * 100 + "% fawn caramel tortie");
//       }
  
//       if ($('#linebreak').is(':checked')) {
//         return colorf.join(", <br>");
//       } else {
//         return colorf.join(", ");
//       }
  
//     }
  
  
//     //AGOUTI/TABBY MODS
  
//     //AGOUTI
  
//     var agouti1 = $("#agouti1").val();
//     var agouti2 = $("#agouti2").val();
//     var agouti = 0;
//     var charcoal = 0;
//     var twilight = 0;
  
//     if (agouti1 === "agouti" || agouti2 === "agouti") {
//       agouti = 1;
//     } else if (agouti1 === "bengal" || agouti2 === "bengal") {
//       if (agouti1 === "bengal" && agouti2 === "bengal") {
//         agouti = 0.75;
//         twilight = 0.25;
//       } else if (agouti1 === "agoutihet" || agouti2 === "agoutihet") {
//         agouti = 0.75;
//         charcoal = 0.25;
//       } else if (agouti1 === "twilight" || agouti2 === "twilight") {
//         agouti = 0.5;
//         twilight = 0.5;
//       } else if (agouti1 === "charcoal" || agouti2 === "charcoal") {
//         agouti = 0.5;
//         twilight = 0.25;
//         charcoal = 0.25;
//       } else if (agouti1 === "noagouti" || agouti2 === "noagouti") {
//         agouti = 0.5;
//         charcoal = 0.5;
//       }
//     } else if (agouti1 === "agoutihet" || agouti2 === "agoutihet") {
//       if (agouti1 === "agoutihet" && agouti2 === "agoutihet") {
//         agouti = 0.75;
//       } else if (agouti1 === "twilight" || agouti2 === "twilight") {
//         agouti = 0.5;
//         twilight = 0.5;
//       } else if (agouti1 === "charcoal" || agouti2 === "charcoal") {
//         agouti = 0.5;
//         charcoal = 0.25;
//       } else if (agouti1 === "noagouti" || agouti2 === "noagouti") {
//         agouti = 0.5;
//       }
//     } else if (agouti1 === "twilight" || agouti2 === "twilight") {
//       if (agouti1 === "twilight" && agouti2 === "twilight") {
//         twilight = 1;
//       } else if (agouti1 === "charcoal" || agouti2 === "charcoal") {
//         twilight = 0.5;
//         charcoal = 0.5;
//       } else if (agouti1 === "noagouti" || agouti2 === "noagouti") {
//         charcoal = 1;
//       }
//     } else if (agouti1 === "charcoal" || agouti2 === "charcoal") {
//       if (agouti1 === "charcoal" && agouti2 === "charcoal") {
//         twilight = 0.25;
//         charcoal = 0.5;
//       } else {
//         charcoal = 0.5;
//       }
//     }
  
//     var solid = 1 - agouti - twilight - charcoal;
  
  
//     //SILVER
  
//     var silver1 = $("#silver1").val();
//     var silver2 = $("#silver2").val();
//     var silver;
  
//     if (silver1 === "silver" || silver2 === "silver") {
//       silver = 1;
//     } else if (silver1 === "nosilver" && silver2 === "nosilver") {
//       silver = 0;
//     } else if (silver1 === "silverhet" && silver2 === "silverhet") {
//       silver = 0.75;
//     } else {
//       silver = 0.5;
//     }
  
//     var nonsilver = 1 - silver;
  
  
//     //WIDE BAND
  
//     var wideband1 = $("#wideband1").val();
//     var wideband2 = $("#wideband2").val();
//     var wb2 = 0;
//     var wb1 = 0;
  
//     if (wideband1 === "wideband" || wideband2 === "wideband") {
//       if (wideband1 === "wideband" && wideband2 === "wideband") {
//         wb2 = 1;
//       } else if (wideband1 === "widebandhet" || wideband2 === "widebandhet") {
//         wb2 = 0.5;
//         wb1 = 0.5;
//       } else {
//         wb1 = 1;
//       }
//     } else if (wideband1 === "widebandhet" || wideband2 === "widebandhet") {
//       if (wideband1 === "widebandhet" && wideband2 === "widebandhet") {
//         wb2 = 0.25;
//         wb1 = 0.5;
//       } else {
//         wb1 = 0.5;
//       }
//     }
  
//     var wb0 = 1 - wb2 - wb1;
  
//     //AMBER
  
//     var amber1 = $("#amber1").val();
//     var amber2 = $("#amber2").val();
//     var amber = 0;
//     var russet = 0;
//     var carnelian = 0;
//     var carnhet = 0;
//     var nonamber = 0;
//     var amberruss = 0;
//     var ambercarn = 0;
//     var russcarn = 0;
  
//     if (amber1 === "noamber" || amber2 === "noamber") {
//       nonamber = 1;
//     } else if (amber1 === "amberhet" || amber2 === "amberhet"){
//       if (amber1 === "amberhet" && amber2 === "amberhet"){
//         amber = 0.25;
//         nonamber = 0.75;
//       } else if (amber1 === "russethet" || amber2 === "russethet"){
//         amberruss = 0.25;
//         nonamber = 0.75;
//       } else if (amber1 === "carnelianhet" || amber2 === "carnelianhet"){
//         ambercarn = 0.25;
//         nonamber = 0.5;
//         carnhet = 0.25;
//       } else if (amber1 === "amber" || amber2 === "amber"){
//         amber = 0.5;
//         nonamber = 0.5;
//       } else if (amber1 === "russet" || amber2 === "russet"){
//         amberruss = 0.5;
//         nonamber = 0.5;
//       } else if (amber1 === "carnelian" || amber2 === "carnelian"){
//         ambercarn = 0.5;
//         carnhet = 0.5;
//       } else if (amber1 === "amberruss" || amber2 === "amberruss"){
//         nonamber = 0.5;
//         amber = 0.25;
//         amberruss = 0.25;
//       } else if (amber1 === "ambercarn" || amber2 === "ambercarn"){
//         nonamber = 0.25;
//         carnhet = 0.25;
//         amber = 0.25;
//         ambercarn = 0.25;
//       } else if (amber1 === "russcarn" || amber2 === "russcarn"){
//         nonamber = 0.25;
//         carnhet = 0.25;
//         ambercarn = 0.25;
//         amberruss = 0.25;
//       }
//     } else if (amber1 === "russethet" || amber2 === "russethet"){
//       if (amber1 === "russethet" && amber2 === "russethet"){
//         nonamber = 0.75;
//         russet = 0.25;
//       } else if (amber1 === "carnelianhet" || amber2 === "carnelianhet"){
//         nonamber = 0.5;
//         carnhet = 0.25;
//         russcarn = 0.25;
//       } else if (amber1 === "amber" || amber2 === "amber"){
//         nonamber = 0.5;
//         amberruss = 0.5;
//       } else if (amber1 === "russet" || amber2 === "russet"){
//         nonamber = 0.5;
//         russet = 0.5;
//       } else if (amber1 === "carnelian" || amber2 === "carnelian"){
//         carnhet = 0.5;
//         russcarn = 0.5;
//       } else if (amber1 === "amberruss" || amber2 === "amberruss"){
//         nonamber = 0.5;
//         amberruss = 0.25;
//         russet = 0.25;
//       } else if (amber1 === "ambercarn" || amber2 === "ambercarn"){
//         nonamber = 0.25;
//         carnhet = 0.25;
//         amberruss = 0.25;
//         russcarn = 0.25;
//       } else if (amber1 === "russcarn" || amber2 === "russcarn"){
//         nonamber = 0.25;
//         carnhet = 0.25;
//         russet = 0.25;
//         russcarn = 0.25;
//       }
//     } else if (amber1 === "carnelianhet" || amber2 === "carnelianhet"){
//       if (amber1 === "carnelianhet" && amber2 === "carnelianhet"){
//         nonamber = 0.25;
//         carnhet = 0.5;
//         carnelian = 0.25;
//       } else if (amber1 === "amber" || amber2 === "amber"){
//         nonamber = 0.5;
//         ambercarn = 0.5;
//       } else if (amber1 === "russet" || amber2 === "russet"){
//         nonamber = 0.5;
//         russcarn = 0.5;
//       } else if (amber1 === "carnelian" || amber2 === "carnelian"){
//         carnhet = 0.5;
//         carnelian = 0.5;
//       } else if (amber1 === "amberruss" || amber2 === "amberruss"){
//         nonamber = 0.5;
//         ambercarn = 0.25;
//         russcarn = 0.25;
//       } else if (amber1 === "ambercarn" || amber2 === "ambercarn"){
//         nonamber = 0.25;
//         carnhet = 0.25;
//         ambercarn = 0.5;
//         carnelian = 0.25;
//       } else if (amber1 === "russcarn" || amber2 === "russcarn"){
//         nonamber = 0.25;
//         carnhet = 0.25;
//         russcarn = 0.5;
//         carnelian = 0.25;
//       }
//     } else if (amber1 === "amber" || amber2 === "amber"){
//       if (amber1 === "amber" && amber2 === "amber"){
//         amber = 1;
//       } else if (amber1 === "russet" || amber2 === "russet"){
//         amberruss = 1;
//       } else if (amber1 === "carnelian" || amber2 === "carnelian"){
//         ambercarn = 1;
//       } else if (amber1 === "amberruss" || amber2 === "amberruss"){
//         amber = 0.5;
//         amberruss = 0.5;
//       } else if (amber1 === "ambercarn" || amber2 === "ambercarn"){
//         amber = 0.5;
//         ambercarn = 0.5;
//       } else if (amber1 === "russcarn" || amber2 === "russcarn"){
//         ambercarn = 0.5;
//         amberruss = 0.5;
//       }
//     } else if (amber1 === "russet" || amber2 === "russet"){
//       if (amber1 === "russet" && amber2 === "russet"){
//         russet = 1;
//       } else if (amber1 === "carnelian" || amber2 === "carnelian"){
//         russcarn = 1;
//       } else if (amber1 === "amberruss" || amber2 === "amberruss"){
//         russet = 0.5;
//         amberruss = 0.5;
//       } else if (amber1 === "ambercarn" || amber2 === "ambercarn"){
//         russcarn = 0.5;
//         amberruss = 0.5;
//       } else if (amber1 === "russcarn" || amber2 === "russcarn"){
//         russcarn = 0.5;
//         russet = 0.5;
//       }
//     } else if (amber1 === "carnelian" || amber2 === "carnelian"){
//       if (amber1 === "carnelian" && amber2 === "carnelian"){
//         carnelian = 1;
//       } else if (amber1 === "amberruss" || amber2 === "amberruss"){
//         russcarn = 0.5;
//         ambercarn = 0.5;
//       } else if (amber1 === "ambercarn" || amber2 === "ambercarn"){
//         carnelian = 0.5;
//         ambercarn = 0.5;
//       } else if (amber1 === "russcarn" || amber2 === "russcarn"){
//         russcarn = 0.5;
//         carnelian = 0.5;
//       }
//     } else if (amber1 === "amberruss" || amber2 === "amberruss"){
//       if (amber1 === "amberruss" && amber2 === "amberruss"){
//         amber = 0.25;
//         amberruss = 0.5;
//         russet = 0.25;
//       } else if (amber1 === "ambercarn" || amber2 === "ambercarn"){
//         amber = 0.25;
//         amberruss = 0.25;
//         ambercarn = 0.25;
//         russcarn = 0.25
//       } else if (amber1 === "russcarn" || amber2 === "russcarn"){
//         russet = 0.25;
//         amberruss = 0.25;
//         ambercarn = 0.25;
//         russcarn = 0.25
//       }
//     } else if (amber1 === "ambercarn" || amber2 === "ambercarn"){
//       if (amber1 === "ambercarn" && amber2 === "ambercarn"){
//         amber = 0.25;
//         ambercarn = 0.5;
//         carnelian = 0.25;
//       } else if (amber1 === "russcarn" || amber2 === "russcarn"){
//         carnelian = 0.25;
//         amberruss = 0.25;
//         ambercarn = 0.25;
//         russcarn = 0.25
//       }
//     } else {
//       russet = 0.25;
//       russcarn = 0.5;
//       carnelian = 0.25;
//     }
  
    
  
//     //SUNSHINE
  
//     var sunshine1 = $("#sunshine1").val();
//     var sunshine2 = $("#sunshine2").val();
//     var sunshine;
  
//     if (sunshine1 === "sunshine" && sunshine2 === 'sunshine') {
//       sunshine = 1;
//     } else if (sunshine1 === "nosunshine" || sunshine2 === 'nosunshine') {
//       sunshine = 0;
//     } else if (sunshine1 === "sunshine" || sunshine2 === "sunshine") {
//       sunshine = 0.5;
//     } else {
//       sunshine = 0.25;
//     }
  
//     var nosunshine = 1 - sunshine;
  
//     //PARSING
  
  
//     function tabbymods() {
  
//       var self = solid * nonsilver * (nonamber + carnhet);
//       var smoke = solid * silver * (nonamber + carnhet);
      
//       var solidamber = solid * nonsilver * amber;
//       var ambersmoke = solid * silver * amber;
      
//       var solidcarnelian = solid * nonsilver * carnelian;
//       var carneliansmoke = solid * silver * carnelian;
      
//       var solidamberruss = solid * nonsilver * amberruss;
//       var amberrusssmoke = solid * silver * amberruss;
      
//       var solidambercarn = solid * nonsilver * ambercarn;
//       var ambercarnsmoke = solid * silver * ambercarn;
      
//       var solidrusscarn = solid * nonsilver * russcarn;
//       var russcarnsmoke = solid * silver * russcarn;
      
  
//       var tabby = agouti * nonsilver * nonamber * nosunshine * wb0;
//       var silvtabby = agouti * silver * nonamber * nosunshine * (wb0 + wb1);
//       var silvshaded = agouti * silver * nonamber * nosunshine * wb2;
//       var goldtabby = agouti * nonsilver * nonamber * nosunshine * wb1;
//       var goldshaded = agouti * nonsilver * nonamber * nosunshine * wb2;
  
//       var ambertabby = agouti * nonsilver * amber * (wb0 + wb1);
//       var silvambertabby = agouti * silver * amber * (wb0 + wb1);
//       var silvshadedambertabby = agouti * silver * amber * wb2;
//       var shadedambertabby = agouti * nonsilver * amber * wb2;
      
//       var russetplain = (solid + agouti) * nonsilver * russet * (wb0 + wb1);
//       var silvrusset = (solid + agouti) * silver * russet * (wb0 + wb1);
//       var silvshadedrusset = (solid + agouti) * silver * russet * wb2;
//       var shadedrusset = (solid + agouti) * nonsilver * russet * wb2;
  
//     var carneliantabby = agouti * nonsilver * carnelian * (wb0 + wb1);
//       var silvcarntabby = agouti * silver * carnelian * (wb0 + wb1);
//       var silvshadedcarntabby = agouti * silver * carnelian * wb2;
//       var shadedcarntabby = agouti * nonsilver * carnelian * wb2;
      
//       var hetcarneliantabby = agouti * nonsilver * carnhet * (wb0 + wb1);
//       var silvhetcarntabby = agouti * silver * carnhet * (wb0 + wb1);
//       var silvshadedhetcarntabby = agouti * silver * carnhet * wb2;
//       var shadedhetcarntabby = agouti * nonsilver * carnhet * wb2;
  
//     var amberrusstabby = agouti * nonsilver * amberruss * (wb0 + wb1);
//       var silvamberrusstabby = agouti * silver * amberruss * (wb0 + wb1);
//       var silvshadedamberrusstabby = agouti * silver * amberruss * wb2;
//       var shadedamberrusstabby = agouti * nonsilver * amberruss * wb2;
      
//       var ambercarntabby = agouti * nonsilver * ambercarn * (wb0 + wb1);
//       var silvambercarntabby = agouti * silver * ambercarn * (wb0 + wb1);
//       var silvshadedambercarntabby = agouti * silver * ambercarn * wb2;
//       var shadedambercarntabby = agouti * nonsilver * ambercarn * wb2;
      
//       var russcarntabby = agouti * nonsilver * russcarn * (wb0 + wb1);
//       var silvrusscarntabby = agouti * silver * russcarn * (wb0 + wb1);
//       var silvshadedrusscarntabby = agouti * silver * russcarn * wb2;
//       var shadedrusscarntabby = agouti * nonsilver * russcarn * wb2;
      
  
//       var sunshinetabby = agouti * nonsilver * nonamber * sunshine * (wb0 + wb1);
//       var bimetaltabby = agouti * silver * nonamber * sunshine * (wb0 + wb1);
//       var bimetalshaded = agouti * silver * nonamber * sunshine * wb2;
//       var sunshineshaded = agouti * silver * nonamber * sunshine * wb2;
  
  
//       var twilighttabby = twilight * nonsilver * nonamber * nosunshine * wb0;
//       var silvtwilight = twilight * silver * nonamber * nosunshine * (wb0 + wb1);
//       var silvshadedtwilight = twilight * silver * nonamber * nosunshine * wb2;
//       var goldtwilight = twilight * nonsilver * nonamber * nosunshine * wb1;
//       var goldshadedtwilight = twilight * nonsilver * nonamber * nosunshine * wb2;
  
//       var ambertwilight = twilight * nonsilver * amber;
//       var silvambertwilight = twilight * silver * amber * (wb0 + wb1);
//       var silvshadedambertwilight = twilight * silver * amber * wb2;
//       var shadedambertwilight = twilight * nonsilver * amber * wb2
  
//       var sunshinetwilight = twilight * nonsilver * nonamber * sunshine * (wb0 + wb1);
//       var bimetaltwilight = twilight * silver * nonamber * sunshine * (wb0 + wb1);
//       var bimetalshadedtwilight = twilight * silver * nonamber * sunshine * wb2;
//       var sunshineshadedtwilight = twilight * silver * nonamber * sunshine * wb2;
     
//       var russettwilight = twilight * nonsilver * russet * (wb0 + wb1);
//       var silvrussettwilight = twilight * silver * russet * (wb0 + wb1);
//       var silvshadedrussettwilight = twilight * silver * russet * wb2;
//       var shadedrussettwilight = twilight * nonsilver * russet * wb2;
  
//       var carneliantwilight = twilight * nonsilver * carnelian * (wb0 + wb1);
//       var silvcarntwilight = twilight * silver * carnelian * (wb0 + wb1);
//       var silvshadedcarntwilight = twilight * silver * carnelian * wb2;
//       var shadedcarntwilight = twilight * nonsilver * carnelian * wb2;
      
//       var hetcarneliantwilight = twilight * nonsilver * carnhet * (wb0 + wb1);
//       var silvhetcarntwilight = twilight * silver * carnhet * (wb0 + wb1);
//       var silvshadedhetcarntwilight = twilight * silver * carnhet * wb2;
//       var shadedhetcarntwilight = twilight * nonsilver * carnhet * wb2;
  
//     var amberrusstwilight = twilight * nonsilver * amberruss * (wb0 + wb1);
//       var silvamberrusstwilight = twilight * silver * amberruss * (wb0 + wb1);
//       var silvshadedamberrusstwilight = twilight * silver * amberruss * wb2;
//       var shadedamberrusstwilight = twilight * nonsilver * amberruss * wb2;
      
//       var ambercarntwilight = twilight * nonsilver * ambercarn * (wb0 + wb1);
//       var silvambercarntwilight = twilight * silver * ambercarn * (wb0 + wb1);
//       var silvshadedambercarntwilight = twilight * silver * ambercarn * wb2;
//       var shadedambercarntwilight = twilight * nonsilver * ambercarn * wb2;
      
//       var russcarntwilight = twilight * nonsilver * russcarn * (wb0 + wb1);
//       var silvrusscarntwilight = twilight * silver * russcarn * (wb0 + wb1);
//       var silvshadedrusscarntwilight = twilight * silver * russcarn * wb2;
//       var shadedrusscarntwilight = twilight * nonsilver * russcarn * wb2;
    
  
//       var charcoaltabby = charcoal * nonsilver * nonamber * nosunshine * wb0;
//       var silvcharcoal = charcoal * silver * nonamber * nosunshine * (wb0 + wb1);
//       var silvshadedcharcoal = charcoal * silver * nonamber * nosunshine * wb2;
//       var goldcharcoal = charcoal * nonsilver * nonamber * nosunshine * wb1;
//       var goldshadedcharcoal = charcoal * nonsilver * nonamber * nosunshine * wb2;
  
//       var ambercharcoal = charcoal * nonsilver * amber;
//       var silvambercharcoal = charcoal * silver * amber * (wb0 + wb1);
//       var silvshadedambercharcoal = charcoal * nonsilver * nonamber * wb2;
//       var shadedambercharcoal = charcoal * nonsilver * amber * wb2
  
//       var sunshinecharcoal = charcoal * nonsilver * nonamber * sunshine * (wb0 + wb1);
//       var bimetalcharcoal = charcoal * silver * nonamber * sunshine * (wb0 + wb1);
//       var bimetalshadedcharcoal = charcoal * silver * nonamber * sunshine * wb2;
//       var sunshineshadedcharcoal = charcoal * silver * nonamber * sunshine * wb2;
  
//     var russetcharcoal = charcoal * nonsilver * russet * (wb0 + wb1);
//       var silvrussetcharcoal = charcoal * silver * russet * (wb0 + wb1);
//       var silvshadedrussetcharcoal = charcoal * silver * russet * wb2;
//       var shadedrussetcharcoal = charcoal * nonsilver * russet * wb2;
  
//     var carneliancharcoal = charcoal * nonsilver * carnelian * (wb0 + wb1);
//       var silvcarncharcoal = charcoal * silver * carnelian * (wb0 + wb1);
//       var silvshadedcarncharcoal = charcoal * silver * carnelian * wb2;
//       var shadedcarncharcoal = charcoal * nonsilver * carnelian * wb2;
      
//       var hetcarneliancharcoal = charcoal * nonsilver * carnhet * (wb0 + wb1);
//       var silvhetcarncharcoal = charcoal * silver * carnhet * (wb0 + wb1);
//       var silvshadedhetcarncharcoal = charcoal * silver * carnhet * wb2;
//       var shadedhetcarncharcoal = charcoal * nonsilver * carnhet * wb2;
  
//       var amberrusscharcoal = charcoal * nonsilver * amberruss * (wb0 + wb1);
//       var silvamberrusscharcoal = charcoal * silver * amberruss * (wb0 + wb1);
//       var silvshadedamberrusscharcoal = charcoal * silver * amberruss * wb2;
//       var shadedamberrusscharcoal = charcoal * nonsilver * amberruss * wb2;
      
//       var ambercarncharcoal = charcoal * nonsilver * ambercarn * (wb0 + wb1);
//       var silvambercarncharcoal = charcoal * silver * ambercarn * (wb0 + wb1);
//       var silvshadedambercarncharcoal = charcoal * silver * ambercarn * wb2;
//       var shadedambercarncharcoal = charcoal * nonsilver * ambercarn * wb2;
      
//       var russcarncharcoal = charcoal * nonsilver * russcarn * (wb0 + wb1);
//       var silvrusscarncharcoal = charcoal * silver * russcarn * (wb0 + wb1);
//       var silvshadedrusscarncharcoal = charcoal * silver * russcarn * wb2;
//       var shadedrusscarncharcoal = charcoal * nonsilver * russcarn * wb2;
      
  
//       var mods = [];
  
//       if (self !== 0) {
//         mods.push(self * 100 + "% solid");
//       }
//       if (smoke !== 0) {
//         mods.push(smoke * 100 + "% smoke");
//       }
//       if (tabby !== 0) {
//         mods.push(tabby * 100 + "% unmodified tabby");
//       }
//       if (silvtabby !== 0) {
//         mods.push(silvtabby * 100 + "% silver tabby");
//       }
//       if (silvshaded !== 0) {
//         mods.push(silvshaded * 100 + "% silver shaded");
//       }
//       if (goldtabby !== 0) {
//         mods.push(goldtabby * 100 + "% golden tabby");
//       }
//       if (goldshaded !== 0) {
//         mods.push(goldshaded * 100 + "% golden shaded");
//       }
  
//       if (twilighttabby !== 0) {
//         mods.push(twilighttabby * 100 + "% twilight tabby");
//       }
//       if (silvtwilight !== 0) {
//         mods.push(silvtwilight * 100 + "% silver twilight tabby");
//       }
//       if (silvshadedtwilight !== 0) {
//         mods.push(silvshadedtwilight * 100 + "% silver twilight shaded");
//       }
//       if (goldtwilight !== 0) {
//         mods.push(goldtwilight * 100 + "% golden twilight tabby");
//       }
//       if (goldshadedtwilight !== 0) {
//         mods.push(goldshadedtwilight * 100 + "% golden twilight shaded");
//       }
  
//       if (charcoaltabby !== 0) {
//         mods.push(charcoaltabby * 100 + "% charcoal tabby");
//       }
//       if (silvcharcoal !== 0) {
//         mods.push(silvcharcoal * 100 + "% silver charcoal tabby");
//       }
//       if (silvshadedcharcoal !== 0) {
//         mods.push(silvshadedcharcoal * 100 + "% silver charcoal shaded");
//       }
//       if (goldcharcoal !== 0) {
//         mods.push(goldcharcoal * 100 + "% golden charcoal tabby");
//       }
//       if (goldshadedcharcoal !== 0) {
//         mods.push(goldshadedcharcoal * 100 + "% golden charcoal shaded");
//       }
  
  
//       //ambers
  
//       if (solidamber !== 0) {
//         mods.push(solidamber * 100 + "% nonagouti amber");
//       }
//       if (ambersmoke !== 0) {
//         mods.push(ambersmoke * 100 + "% amber smoke");
//       }
  
//       if (ambertabby !== 0) {
//         mods.push(ambertabby * 100 + "% amber tabby");
//       }
//       if (silvambertabby !== 0) {
//         mods.push(silvambertabby * 100 + "% amber silver tabby");
//       }
//       if (silvshadedambertabby !== 0) {
//         mods.push(silvshadedambertabby * 100 + "% amber silver shaded");
//       }
//       if (shadedambertabby !== 0) {
//         mods.push(shadedambertabby * 100 + "% amber shaded");
//       }
  
//       if (ambertwilight !== 0) {
//         mods.push(ambertwilight * 100 + "% amber twilight tabby");
//       }
//       if (silvambertwilight !== 0) {
//         mods.push(silvambertwilight * 100 + "% amber silver twilight tabby");
//       }
//       if (silvshadedambertwilight !== 0) {
//         mods.push(silvshadedambertwilight * 100 + "% amber silver twilight shaded");
//       }
//       if (shadedambertwilight !== 0) {
//         mods.push(shadedambertwilight * 100 + "% amber twilight shaded");
//       }
  
//       if (ambercharcoal !== 0) {
//         mods.push(ambercharcoal * 100 + "% amber charcoal tabby");
//       }
//       if (silvambercharcoal !== 0) {
//         mods.push(silvambercharcoal * 100 + "% amber silver charcoal tabby");
//       }
//       if (silvshadedambercharcoal !== 0) {
//         mods.push(silvshadedambercharcoal * 100 + "% amber silver charcoal shaded");
//       }
//       if (shadedambercharcoal !== 0) {
//         mods.push(shadedambercharcoal * 100 + "% amber charcoal shaded");
//       }
  
//       //sunshines
  
//       if (sunshinetabby !== 0) {
//         mods.push(sunshinetabby * 100 + "% sunshine tabby");
//       }
//       if (bimetaltabby !== 0) {
//         mods.push(bimetaltabby * 100 + "% bimetal tabby");
//       }
//       if (bimetalshaded !== 0) {
//         mods.push(bimetalshaded * 100 + "% bimetal shaded");
//       }
//       if (sunshineshaded !== 0) {
//         mods.push(sunshineshaded * 100 + "% sunshine shaded");
//       }
  
//       if (sunshinetwilight !== 0) {
//         mods.push(sunshinetwilight * 100 + "% sunshine twilight tabby");
//       }
//       if (bimetaltwilight !== 0) {
//         mods.push(bimetaltwilight * 100 + "% bimetal twilight tabby");
//       }
//       if (bimetalshadedtwilight !== 0) {
//         mods.push(bimetalshadedtwilight * 100 + "% bimetal twilight shaded");
//       }
//       if (sunshineshadedtwilight !== 0) {
//         mods.push(sunshineshadedtwilight * 100 + "% sunshine twilight shaded");
//       }
  
//       if (sunshinecharcoal !== 0) {
//         mods.push(sunshinecharcoal * 100 + "% sunshine charcoal tabby");
//       }
//       if (bimetalcharcoal !== 0) {
//         mods.push(bimetalcharcoal * 100 + "% bimetal charcoal tabby");
//       }
//       if (bimetalshadedcharcoal !== 0) {
//         mods.push(bimetalshadedcharcoal * 100 + "% bimetal charcoal shaded");
//       }
//       if (sunshineshadedcharcoal !== 0) {
//         mods.push(sunshineshadedcharcoal * 100 + "% sunshine charcoal shaded");
//       }
      
//        //russets
      
//       if (russetplain !== 0) {
//         mods.push(russetplain * 100 + "% russet tabby");
//       }
//       if (silvrusset !== 0) {
//         mods.push(silvrusset * 100 + "% silver russet tabby");
//       }
//       if (silvshadedrusset !== 0) {
//         mods.push(silvshadedrusset * 100 + "% russet silver shaded");
//       }
//       if (shadedrusset !== 0) {
//         mods.push(russet * 100 + "% russet shaded");
//       }
//       if (russettwilight !== 0) {
//         mods.push(russettwilight * 100 + "% russet twilight tabby");
//       }
//       if (silvrussettwilight !== 0) {
//         mods.push(silvrussettwilight * 100 + "%  russet silver twilight tabby");
//       }
//       if (silvshadedrussettwilight !== 0) {
//         mods.push(silvshadedrussettwilight * 100 + "% russet silver twilight shaded");
//       }
//       if (shadedrussettwilight !== 0) {
//         mods.push(shadedrussettwilight * 100 + "% russet twilight shaded");
//       }
  
//       if (russetcharcoal !== 0) {
//         mods.push(russetcharcoal * 100 + "% russet charcoal tabby");
//       }
//       if (silvrussetcharcoal !== 0) {
//         mods.push(silvrussetcharcoal * 100 + "% russet silver charcoal tabby");
//       }
//       if (silvshadedrussetcharcoal !== 0) {
//         mods.push(silvshadedrussetcharcoal * 100 + "% russet silver charcoal shaded");
//       }
//       if (shadedrussetcharcoal !== 0) {
//         mods.push(shadedrussetcharcoal * 100 + "% russet charcoal shaded");
//       }
      
//       //hetcarn
      
//       if (hetcarneliantabby !== 0) {
//         mods.push(hetcarneliantabby * 100 + "% carnelian carrier tabby");
//       }
//       if (silvhetcarntabby !== 0) {
//         mods.push(silvhetcarntabby * 100 + "% carnelian carrier silver tabby");
//       }
//       if (silvshadedhetcarntabby !== 0) {
//         mods.push(silvshadedhetcarntabby * 100 + "% carnelian carrier silver shaded");
//       }
//       if (shadedhetcarntabby !== 0) {
//         mods.push(shadedhetcarntabby * 100 + "% carnelian carrier shaded");
//       }
  
//       if (hetcarneliantwilight !== 0) {
//         mods.push(hetcarneliantwilight * 100 + "% carnelian carrier twilight tabby");
//       }
//       if (silvhetcarntwilight !== 0) {
//         mods.push(silvhetcarntwilight * 100 + "% carnelian carrier silver twilight tabby");
//       }
//       if (silvshadedhetcarntwilight !== 0) {
//         mods.push(silvshadedhetcarntwilight * 100 + "% carnelian carrier silver twilight shaded");
//       }
//       if (shadedhetcarntwilight !== 0) {
//         mods.push(shadedhetcarntwilight * 100 + "% carnelian carrier twilight shaded");
//       }
  
//       if (hetcarneliancharcoal !== 0) {
//         mods.push(hetcarneliancharcoal * 100 + "% carnelian carrier charcoal tabby");
//       }
//       if (silvhetcarncharcoal !== 0) {
//         mods.push(silvhetcarncharcoal * 100 + "% carnelian carrier silver charcoal tabby");
//       }
//       if (silvshadedhetcarncharcoal !== 0) {
//         mods.push(silvshadedhetcarncharcoal * 100 + "% carnelian carrier silver charcoal shaded");
//       }
//       if (shadedhetcarncharcoal !== 0) {
//         mods.push(shadedhetcarncharcoal * 100 + "% carnelian carrier charcoal shaded");
//       }
      
//       //carnelian
      
//       if (solidcarnelian !== 0) {
//         mods.push(solidcarnelian * 100 + "% nonagouti carnelian");
//       }
//       if (carneliansmoke !== 0) {
//         mods.push(carneliansmoke * 100 + "% carnelian smoke");
//       }
  
//       if (carneliantabby !== 0) {
//         mods.push(carneliantabby * 100 + "% carnelian tabby");
//       }
//       if (silvcarntabby !== 0) {
//         mods.push(silvcarntabby * 100 + "% carnelian silver tabby");
//       }
//       if (silvshadedcarntabby !== 0) {
//         mods.push(silvshadedcarntabby * 100 + "% carnelian silver shaded");
//       }
//       if (shadedcarntabby !== 0) {
//         mods.push(shadedcarntabby * 100 + "% carnelian shaded");
//       }
  
//       if (carneliantwilight !== 0) {
//         mods.push(carneliantwilight * 100 + "% carnelian twilight tabby");
//       }
//       if (silvcarntwilight !== 0) {
//         mods.push(silvcarntwilight * 100 + "% carnelian silver twilight tabby");
//       }
//       if (silvshadedcarntwilight !== 0) {
//         mods.push(silvshadedcarntwilight * 100 + "% carnelian silver twilight shaded");
//       }
//       if (shadedcarntwilight !== 0) {
//         mods.push(shadedcarntwilight * 100 + "% carnelian twilight shaded");
//       }
  
//       if (carneliancharcoal !== 0) {
//         mods.push(carneliancharcoal * 100 + "% carnelian charcoal tabby");
//       }
//       if (silvcarncharcoal !== 0) {
//         mods.push(silvcarncharcoal * 100 + "% carnelian silver charcoal tabby");
//       }
//       if (silvshadedcarncharcoal !== 0) {
//         mods.push(silvshadedcarncharcoal * 100 + "% carnelian silver charcoal shaded");
//       }
//       if (shadedcarncharcoal !== 0) {
//         mods.push(shadedcarncharcoal * 100 + "% carnelian charcoal shaded");
//       }
      
//       //amber-russet
      
//       if (solidamberruss !== 0) {
//         mods.push(solidamberruss * 100 + "% nonagouti amber-russet");
//       }
//       if (amberrusssmoke !== 0) {
//         mods.push(amberrusssmoke * 100 + "% amber-russet smoke");
//       }
  
//       if (amberrusstabby !== 0) {
//         mods.push(amberrusstabby * 100 + "% amber-russet tabby");
//       }
//       if (silvamberrusstabby !== 0) {
//         mods.push(silvamberrusstabby * 100 + "% amber-russet silver tabby");
//       }
//       if (silvshadedamberrusstabby !== 0) {
//         mods.push(silvshadedamberrusstabby * 100 + "% amber-russet silver shaded");
//       }
//       if (shadedamberrusstabby !== 0) {
//         mods.push(shadedamberrusstabby * 100 + "% amber-russet shaded");
//       }
  
//       if (amberrusstwilight !== 0) {
//         mods.push(amberrusstwilight * 100 + "% amber-russet twilight tabby");
//       }
//       if (silvamberrusstwilight !== 0) {
//         mods.push(silvamberrusstwilight * 100 + "% amber-russet silver twilight tabby");
//       }
//       if (silvshadedamberrusstwilight !== 0) {
//         mods.push(silvshadedamberrusstwilight * 100 + "% amber-russet silver twilight shaded");
//       }
//       if (shadedamberrusstwilight !== 0) {
//         mods.push(shadedamberrusstwilight * 100 + "% amber-russet twilight shaded");
//       }
  
//       if (amberrusscharcoal !== 0) {
//         mods.push(amberrusscharcoal * 100 + "% amber-russet charcoal tabby");
//       }
//       if (silvamberrusscharcoal !== 0) {
//         mods.push(silvamberrusscharcoal * 100 + "% amber-russet silver charcoal tabby");
//       }
//       if (silvshadedamberrusscharcoal !== 0) {
//         mods.push(silvshadedamberrusscharcoal * 100 + "% amber-russet silver charcoal shaded");
//       }
//       if (shadedamberrusscharcoal !== 0) {
//         mods.push(shadedamberrusscharcoal * 100 + "% amber-russet charcoal shaded");
//       }
      
//       //amber-carnelian
      
//       if (solidambercarn !== 0) {
//         mods.push(solidambercarn * 100 + "% nonagouti amber-carnelian");
//       }
//       if (ambercarnsmoke !== 0) {
//         mods.push(ambercarnsmoke * 100 + "% amber-carnelian smoke");
//       }
  
//       if (ambercarntabby !== 0) {
//         mods.push(ambercarntabby * 100 + "% amber-carnelian tabby");
//       }
//       if (silvambercarntabby !== 0) {
//         mods.push(silvambercarntabby * 100 + "% amber-carnelian silver tabby");
//       }
//       if (silvshadedambercarntabby !== 0) {
//         mods.push(silvshadedambercarntabby * 100 + "% amber-carnelian silver shaded");
//       }
//       if (shadedambercarntabby !== 0) {
//         mods.push(shadedambercarntabby * 100 + "% amber-carnelian shaded");
//       }
  
//       if (ambercarntwilight !== 0) {
//         mods.push(ambercarntwilight * 100 + "% amber-carnelian twilight tabby");
//       }
//       if (silvambercarntwilight !== 0) {
//         mods.push(silvambercarntwilight * 100 + "% amber-carnelian silver twilight tabby");
//       }
//       if (silvshadedambercarntwilight !== 0) {
//         mods.push(silvshadedambercarntwilight * 100 + "% amber-carnelian silver twilight shaded");
//       }
//       if (shadedambercarntwilight !== 0) {
//         mods.push(shadedambercarntwilight * 100 + "% amber-carnelian twilight shaded");
//       }
  
//       if (ambercarncharcoal !== 0) {
//         mods.push(ambercarncharcoal * 100 + "% amber-carnelian charcoal tabby");
//       }
//       if (silvambercarncharcoal !== 0) {
//         mods.push(silvambercarncharcoal * 100 + "% amber-carnelian silver charcoal tabby");
//       }
//       if (silvshadedambercarncharcoal !== 0) {
//         mods.push(silvshadedambercarncharcoal * 100 + "% amber-carnelian silver charcoal shaded");
//       }
//       if (shadedambercarncharcoal !== 0) {
//         mods.push(shadedambercarncharcoal * 100 + "% amber-carnelian charcoal shaded");
//       }
  
//       //russet-carnelian
      
//       if (solidrusscarn !== 0) {
//         mods.push(solidrusscarn * 100 + "% nonagouti russet-carnelian");
//       }
//       if (russcarnsmoke !== 0) {
//         mods.push(russcarnsmoke * 100 + "% russet-carnelian smoke");
//       }
  
//       if (russcarntabby !== 0) {
//         mods.push(russcarntabby * 100 + "% russet-carnelian tabby");
//       }
//       if (silvrusscarntabby !== 0) {
//         mods.push(silvrusscarntabby * 100 + "% russet-carnelian silver tabby");
//       }
//       if (silvshadedrusscarntabby !== 0) {
//         mods.push(silvshadedrusscarntabby * 100 + "% russet-carnelian silver shaded");
//       }
//       if (shadedrusscarntabby !== 0) {
//         mods.push(shadedrusscarntabby * 100 + "% russet-carnelian shaded");
//       }
  
//       if (russcarntwilight !== 0) {
//         mods.push(russcarntwilight * 100 + "% russet-carnelian twilight tabby");
//       }
//       if (silvrusscarntwilight !== 0) {
//         mods.push(silvrusscarntwilight * 100 + "% russet-carnelian silver twilight tabby");
//       }
//       if (silvshadedrusscarntwilight !== 0) {
//         mods.push(silvshadedrusscarntwilight * 100 + "% russet-carnelian silver twilight shaded");
//       }
//       if (shadedrusscarntwilight !== 0) {
//         mods.push(shadedrusscarntwilight * 100 + "% russet-carnelian twilight shaded");
//       }
  
//       if (russcarncharcoal !== 0) {
//         mods.push(russcarncharcoal * 100 + "% russet-carnelian charcoal tabby");
//       }
//       if (silvrusscarncharcoal !== 0) {
//         mods.push(silvrusscarncharcoal * 100 + "% russet-carnelian silver charcoal tabby");
//       }
//       if (silvshadedrusscarncharcoal !== 0) {
//         mods.push(silvshadedrusscarncharcoal * 100 + "% russet-carnelian silver charcoal shaded");
//       }
//       if (shadedrusscarncharcoal !== 0) {
//         mods.push(shadedrusscarncharcoal * 100 + "% russet-carnelian charcoal shaded");
//       }
  
//       if ($('#linebreak').is(':checked')) {
//         return mods.join(", <br>");
//       } else {
//         return mods.join(", ");
//       }
  
//     }
  
  
//     //AGAIN FOR REDS
  
//     function tabbymodsred() {
  
//       var tabbyred = (agouti + solid) * nonsilver * (wb0 + wb1);
//       var silvtabbyred = (agouti + solid) * silver * nosunshine * (wb0 + wb1);
//       var silvshadedred = (agouti + solid) * silver * nosunshine * wb2;
//       var bimetaltabbyred = (agouti + solid) * silver * sunshine * (wb0 + wb1);
//       var bimetalshadedred = (agouti + solid) * silver * sunshine * wb2;
//       var goldshadedred = (agouti + solid) * nonsilver * wb2;
  
//       var twilighttabbyred = twilight * nonsilver * wb0;
//       var silvtwilightred = twilight * silver * nosunshine * (wb0 + wb1);
//       var silvshadedtwilightred = twilight * silver * nosunshine * wb2;
//       var bimetaltwilightred = twilight * silver * sunshine * (wb0 + wb1);
//       var bimetalshadedtwilightred = twilight * silver * sunshine * wb2;
//       var goldshadedtwilightred = twilight * nonsilver * wb2;
  
//       var charcoaltabbyred = charcoal * nonsilver * wb0;
//       var silvcharcoalred = charcoal * silver * nosunshine * (wb0 + wb1);
//       var silvshadedcharcoalred = charcoal * silver * nosunshine * wb2;
//       var bimetalcharcoalred = charcoal * silver * sunshine * (wb0 + wb1);
//       var bimetalshadedcharcoalred = charcoal * silver * sunshine * wb2;
//       var goldshadedcharcoalred = charcoal * nonsilver * wb2;
  
//       var redmods = [];
  
//       if (tabbyred !== 0) {
//         redmods.push(tabbyred * 100 + "% unmodified tabby");
//       }
//       if (silvtabbyred !== 0) {
//         redmods.push(silvtabbyred * 100 + "% cameo tabby");
//       }
//       if (silvshadedred !== 0) {
//         redmods.push(silvshadedred * 100 + "% cameo shaded");
//       }
//       if (goldshadedred !== 0) {
//         redmods.push(goldshadedred * 100 + "% shaded tabby");
//       }
  
//       if (twilighttabbyred !== 0) {
//         redmods.push(twilighttabbyred * 100 + "% twilight tabby");
//       }
//       if (silvtwilightred !== 0) {
//         redmods.push(silvtwilightred * 100 + "% cameo twilight tabby");
//       }
//       if (silvshadedtwilightred !== 0) {
//         redmods.push(silvshadedtwilightred * 100 + "% cameo twilight shaded");
//       }
//       if (goldshadedtwilightred !== 0) {
//         redmods.push(goldshadedtwilightred * 100 + "% twilight shaded");
//       }
  
//       if (charcoaltabbyred !== 0) {
//         redmods.push(charcoaltabbyred * 100 + "% twilight tabby");
//       }
//       if (silvcharcoalred !== 0) {
//         redmods.push(silvcharcoalred * 100 + "% cameo twilight tabby");
//       }
//       if (silvshadedcharcoalred !== 0) {
//         redmods.push(silvshadedcharcoalred * 100 + "% cameo twilight shaded");
//       }
//       if (goldshadedcharcoalred !== 0) {
//         redmods.push(goldshadedcharcoalred * 100 + "% twilight shaded");
//       }
  
//       if (bimetaltabbyred !== 0) {
//         redmods.push(bimetaltabbyred * 100 + "% bimetal tabby");
//       }
//       if (bimetalshadedred !== 0) {
//         redmods.push(bimetalshadedred * 100 + "% bimetal shaded");
//       }
//       if (bimetaltwilightred !== 0) {
//         redmods.push(bimetaltwilightred * 100 + "% bimetal twilight tabby");
//       }
//       if (bimetalshadedtwilightred !== 0) {
//         redmods.push(bimetalshadedtwilightred * 100 + "% bimetal twilight shaded");
//       }
//       if (bimetalcharcoalred !== 0) {
//         redmods.push(bimetalcharcoalred * 100 + "% bimetal charcoal tabby");
//       }
//       if (bimetalshadedcharcoalred !== 0) {
//         redmods.push(bimetalshadedcharcoalred * 100 + "% bimetal charcoal shaded");
//       }
  
  
//       if ($('#linebreak').is(':checked')) {
//         return redmods.join(", <br>");
//       } else {
//         return redmods.join(", ");
//       }
  
//     }
  
  
  
//     //TABBY TYPE
  
//     function tabbytype() {
  
//       var tick1 = $("#tick1").val();
//       var tick2 = $("#tick2").val();
//       var ticked;
  
//       if (tick1 === "tick" || tick2 === "tick") {
//         ticked = 1;
//       } else if (tick1 === "notick" && tick2 === "notick") {
//         ticked = 0;
//       } else if (tick1 === "tickhet" && tick2 === "tickhet") {
//         ticked = 0.75;
//       } else {
//         ticked = 0.5;
//       }
  
//       var nonticked = 1 - ticked;
  
  
//       var tabby1 = $("#tabby1").val();
//       var tabby2 = $("#tabby2").val();
//       var classic;
  
//       if (tabby1 === "mackerel" || tabby2 === "mackerel") {
//         classic = 0;
//       } else if (tabby1 === "classic" && tabby2 === "classic") {
//         classic = 1;
//       } else if (tabby1 === "mackerelhet" && tabby2 === "mackerelhet") {
//         classic = 0.25;
//       } else {
//         classic = 0.5;
//       }
  
//       var nonclassic = 1 - classic;
  
  
//       var spot1 = $("#spot1").val();
//       var spot2 = $("#spot2").val();
//       var spotted = 0;
//       var broken = 0;
  
//       if (spot1 === "spot" || spot2 === "spot") {
//         if (spot1 === "spot" && spot2 === "spot") {
//           spotted = 1;
//         } else if (spot1 === "spothet" || spot2 === "spothet") {
//           spotted = 0.5;
//           broken = 0.5;
//         } else {
//           broken = 1;
//         }
//       } else if (spot1 === "spothet" || spot2 === "spothet") {
//         if (spot1 === "spothet" && spot2 === "spothet") {
//           spotted = 0.25;
//           broken = 0.5;
//         } else {
//           broken = 0.5;
//         }
//       }
  
//       var unbroken = 1 - spotted - broken;
  
  
//       var bengal1 = $("#bengal1").val();
//       var bengal2 = $("#bengal2").val();
//       var bengal;
  
//       if (bengal1 === "bengal" || bengal2 === "bengal") {
//         bengal = 1;
//       } else if (bengal1 === "nobengal" && bengal2 === "nobengal") {
//         bengal = 0;
//       } else if (bengal1 === "bengalhet" && bengal2 === "bengalhet") {
//         bengal = 0.75;
//       } else {
//         bengal = 0.5;
//       }
  
//       var nonbengal = 1 - bengal;
  
//       //PARSING
  
//       var tickedtabby = ticked;
//       var classictabby = nonticked * classic * nonbengal;
//       var marbledtabby = nonticked * classic * bengal;
//       var spottedtabby = nonticked * nonclassic * spotted * nonbengal;
//       var rosettedtabby = nonticked * nonclassic * spotted * bengal;
//       var brokentabby = nonticked * nonclassic * broken * nonbengal;
//       var brokenbraidedtabby = nonticked * nonclassic * broken * bengal;
//       var mackereltabby = nonticked * nonclassic * unbroken * nonbengal;
//       var braidedtabby = nonticked * nonclassic * unbroken * bengal;
  
//       var tabbytype = [];
  
//       if (tickedtabby !== 0) {
//         tabbytype.push(tickedtabby * 100 + "% ticked tabby");
//       }
//       if (classictabby !== 0) {
//         tabbytype.push(classictabby * 100 + "% classic tabby");
//       }
//       if (mackereltabby !== 0) {
//         tabbytype.push(mackereltabby * 100 + "% mackerel tabby");
//       }
//       if (brokentabby !== 0) {
//         tabbytype.push(brokentabby * 100 + "% broken mackerel tabby");
//       }
//       if (spottedtabby !== 0) {
//         tabbytype.push(spottedtabby * 100 + "% spotted tabby");
//       }
//       if (marbledtabby !== 0) {
//         tabbytype.push(marbledtabby * 100 + "% marbled tabby");
//       }
//       if (braidedtabby !== 0) {
//         tabbytype.push(braidedtabby * 100 + "% braided tabby");
//       }
//       if (brokenbraidedtabby !== 0) {
//         tabbytype.push(brokenbraidedtabby * 100 + "% broken braided tabby");
//       }
//       if (rosettedtabby !== 0) {
//         tabbytype.push(rosettedtabby * 100 + "% rosetted tabby");
//       }
  
//       if ($('#linebreak').is(':checked')) {
//         return tabbytype.join(", <br>");
//       } else {
//         return tabbytype.join(", ");
//       }
  
//     }
  
  
  
  
//     //PATTERNS
  
//     function point() {
  
//       var point1 = $("#point1").val();
//       var point2 = $("#point2").val();
//       var standard = 0;
//       var sepia = 0;
//       var mink = 0;
//       var colorpoint = 0;
//       var mocha = 0;
//       var burmocha = 0;
//       var siamocha = 0
//       var sepiaalbino = 0;
//       var pointalbino = 0;
//       var mochaalbino = 0;
//       var albino = 0;
  
  
//       if (point1 === "nopoint" || point2 === "nopoint") {
//         standard = 1;
//       } else if (point1 === "nopointb" || point2 === "nopointb") {
//         if (point1 === "nopointb" && point2 === "nopointb") {
//           standard = 0.75;
//           sepia = 0.25;
//         } else if (point1 === "nopoints" || point2 === "nopoints") {
//           standard = 0.75;
//           mink = 0.25;
//         } else if (point1 === "nopointm" || point2 === "nopointm") {
//           standard = 0.75;
//           burmocha = 0.25;
//         } else if (point1 === "nopointa" || point2 === "nopointa") {
//           standard = 0.75;
//           sepiaalbino = 0.25;
//         } else if (point1 === "sepia" || point2 === "sepia") {
//           standard = 0.5;
//           sepia = 0.5;
//         } else if (point1 === "mink" || point2 === "mink") {
//           standard = 0.5;
//           sepia = 0.25;
//           mink = 0.25;
//         } else if (point1 === "colorpoint" || point2 === "colorpoint") {
//           standard = 0.5;
//           mink = 0.25;
//           colorpoint = 0.25;
//         } else if (point1 === "mocha" || point2 === "mocha") {
//           standard = 0.5;
//           burmocha = 0.5;
//         } else if (point1 === "burmocha" || point2 === "burmocha") {
//           standard = 0.5;
//           sepia = 0.25;
//           burmocha = 0.25;
//         } else if (point1 === "siamocha" || point2 === "siamocha") {
//           standard = 0.5;
//           mink = 0.25;
//           burmocha = 0.25;
//         } else if (point1 === "sepiaa" || point2 === "sepiaa") {
//           standard = 0.5;
//           sepia = 0.25;
//           sepiaalbino = 0.25;
//         } else if (point1 === "colorpointa" || point2 === "colorpointa") {
//           standard = 0.5;
//           mink = 0.25;
//           sepiaalbino = 0.25;
//         } else if (point1 === "mochaa" || point2 === "mochaa") {
//           standard = 0.5;
//           burmocha = 0.25;
//           sepiaalbino = 0.25;
//         } else {
//           standard = 0.5;
//           sepiaalbino = 0.5;
//         }
//       } else if (point1 === "nopoints" || point2 === "nopoints") {
//         if (point1 === "nopoints" && point2 === "nopoints") {
//           standard = 0.75;
//           colorpoint = 0.25;
//         } else if (point1 === "nopointm" || point2 === "nopointm") {
//           standard = 0.75;
//           siamocha = 0.25;
//         } else if (point1 === "nopointa" || point2 === "nopointa") {
//           standard = 0.75;
//           pointalbino = 0.25;
//         } else if (point1 === "sepia" || point2 === "sepia") {
//           standard = 0.5;
//           mink = 0.5;
//         } else if (point1 === "mink" || point2 === "mink") {
//           standard = 0.5;
//           mink = 0.25;
//           colorpoint = 0.25;
//         } else if (point1 === "colorpoint" || point2 === "colorpoint") {
//           standard = 0.5;
//           colorpoint = 0.5;
//         } else if (point1 === "mocha" || point2 === "mocha") {
//           standard = 0.5;
//           siamocha = 0.5;
//         } else if (point1 === "burmocha" || point2 === "burmocha") {
//           standard = 0.5;
//           mink = 0.25;
//           siamocha = 0.25;
//         } else if (point1 === "siamocha" || point2 === "siamocha") {
//           standard = 0.5;
//           colorpoint = 0.25;
//           siamocha = 0.25;
//         } else if (point1 === "sepiaa" || point2 === "sepiaa") {
//           standard = 0.5;
//           mink = 0.25;
//           pointalbino = 0.25;
//         } else if (point1 === "colorpointa" || point2 === "colorpointa") {
//           standard = 0.5;
//           colorpoint = 0.25;
//           pointalbino = 0.25;
//         } else if (point1 === "mochaa" || point2 === "mochaa") {
//           standard = 0.5;
//           siamocha = 0.25;
//           pointalbino = 0.25;
//         } else {
//           standard = 0.5;
//           pointalbino = 0.5;
//         }
//       } else if (point1 === "nopointm" || point2 === "nopointm") {
//         if (point1 === "nopointm" && point2 === "nopointm") {
//           standard = 0.75;
//           mocha = 0.25;
//         } else if (point1 === "nopointa" || point2 === "nopointa") {
//           standard = 0.75;
//           mochaalbino = 0.25;
//         } else if (point1 === "sepia" || point2 === "sepia") {
//           standard = 0.5;
//           burmocha = 0.5;
//         } else if (point1 === "mink" || point2 === "mink") {
//           standard = 0.5;
//           burmocha = 0.25;
//           siamocha = 0.25;
//         } else if (point1 === "colorpoint" || point2 === "colorpoint") {
//           standard = 0.5;
//           siamocha = 0.5;
//         } else if (point1 === "burmocha" || point2 === "burmocha") {
//           standard = 0.5;
//           burmocha = 0.25;
//           mocha = 0.25;
//         } else if (point1 === "siamocha" || point2 === "siamocha") {
//           standard = 0.5;
//           siamocha = 0.25;
//           mocha = 0.25;
//         } else if (point1 === "sepiaa" || point2 === "sepiaa") {
//           standard = 0.5;
//           burmocha = 0.25;
//           mochaalbino = 0.25;
//         } else if (point1 === "colorpointa" || point2 === "colorpointa") {
//           standard = 0.5;
//           siamocha = 0.25;
//           mochaalbino = 0.25;
//         } else if (point1 === "mochaa" || point2 === "mochaa") {
//           standard = 0.5;
//           mocha = 0.25;
//           mochaalbino = 0.25;
//         } else {
//           standard = 0.5;
//           mochaalbino = 0.5;
//         }
//       } else if (point1 === "nopointa" || point2 === "nopointa") {
//         if (point1 === "nopointa" && point2 === "nopointa") {
//           standard = 0.75;
//           albino = 0.25;
//         } else if (point1 === "sepia" || point2 === "sepia") {
//           standard = 0.5;
//           sepiaalbino = 0.5;
//         } else if (point1 === "mink" || point2 === "mink") {
//           standard = 0.5;
//           sepiaalbino = 0.25;
//           pointalbino = 0.25;
//         } else if (point1 === "colorpoint" || point2 === "colorpoint") {
//           standard = 0.5;
//           pointalbino = 0.5;
//         } else if (point1 === "mocha" || point2 === "mocha") {
//           standard = 0.5;
//           mochaalbino = 0.5;
//         } else if (point1 === "burmocha" || point2 === "burmocha") {
//           standard = 0.5;
//           mochaalbino = 0.25;
//           sepiaalbino = 0.25;
//         } else if (point1 === "siamocha" || point2 === "siamocha") {
//           standard = 0.5;
//           mochaalbino = 0.25;
//           pointalbino = 0.25;
//         } else if (point1 === "sepiaa" || point2 === "sepiaa") {
//           standard = 0.5;
//           sepiaalbino = 0.25;
//           albino = 0.25;
//         } else if (point1 === "colorpointa" || point2 === "colorpointa") {
//           standard = 0.5;
//           pointalbino = 0.25;
//           albino = 0.25;
//         } else if (point1 === "mochaa" || point2 === "mochaa") {
//           standard = 0.5;
//           mochaalbino = 0.25;
//           albino = 0.25;
//         } else {
//           standard = 0.5;
//           albino = 0.5;
//         }
//       } else if (point1 === "sepia" || point2 === "sepia") {
//         if (point1 === "sepia" && point2 === "sepia") {
//           sepia = 1;
//         } else if (point1 === "mink" || point2 === "mink") {
//           sepia = 0.5;
//           mink = 0.5;
//         } else if (point1 === "colorpoint" || point2 === "colorpoint") {
//           mink = 1;
//         } else if (point1 === "mocha" || point2 === "mocha") {
//           burmocha = 1;
//         } else if (point1 === "burmocha" || point2 === "burmocha") {
//           sepia = 0.5;
//           burmocha = 0.5;
//         } else if (point1 === "siamocha" || point2 === "siamocha") {
//           burmocha = 0.5;
//           mink = 0.5;
//         } else if (point1 === "sepiaa" || point2 === "sepiaa") {
//           sepia = 0.5;
//           sepiaalbino = 0.5;
//         } else if (point1 === "colorpointa" || point2 === "colorpointa") {
//           sepiaalbino = 0.5;
//           mink = 0.5;
//         } else if (point1 === "mochaa" || point2 === "mochaa") {
//           sepiaalbino = 0.5;
//           burmocha = 0.5;
//         } else {
//           sepiaalbino = 1;
//         }
//       } else if (point1 === "mink" || point2 === "mink") {
//         if (point1 === "mink" && point2 === "mink") {
//           colorpoint = 0.25;
//           mink = 0.5;
//           sepia = 0.25;
//         } else if (point1 === "colorpoint" || point2 === "colorpoint") {
//           colorpoint = 0.5;
//           mink = 0.5;
//         } else if (point1 === "mocha" || point2 === "mocha") {
//           siamocha = 0.5;
//           burmocha = 0.5;
//         } else if (point1 === "burmocha" || point2 === "burmocha") {
//           sepia = 0.25;
//           mink = 0.25;
//           siamocha = 0.25;
//           burmocha = 0.25;
//         } else if (point1 === "siamocha" || point2 === "siamocha") {
//           colorpoint = 0.25;
//           mink = 0.25;
//           siamocha = 0.25;
//           burmocha = 0.25;
//         } else if (point1 === "sepiaa" || point2 === "sepiaa") {
//           sepia = 0.25;
//           mink = 0.25;
//           sepiaalbino = 0.25;
//           pointalbino = 0.25;
//         } else if (point1 === "colorpointa" || point2 === "colorpointa") {
//           colorpoint = 0.25;
//           mink = 0.25;
//           sepiaalbino = 0.25;
//           pointalbino = 0.25;
//         } else if (point1 === "mochaa" || point2 === "mochaa") {
//           siamocha = 0.25;
//           burmocha = 0.25;
//           sepiaalbino = 0.25;
//           pointalbino = 0.25;
//         } else {
//           sepiaalbino = 0.5;
//           pointalbino = 0.5;
//         }
//       } else if (point1 === "colorpoint" || point2 === "colorpoint") {
//         if (point1 === "colorpoint" && point2 === "colorpoint") {
//           colorpoint = 1;
//         } else if (point1 === "mocha" || point2 === "mocha") {
//           siamocha = 1;
//         } else if (point1 === "siamocha" || point2 === "siamocha") {
//           colorpoint = 0.5;
//           siamocha = 0.5;
//         } else if (point1 === "burmocha" || point2 === "burmocha") {
//           mink = 0.5;
//           siamocha = 0.5;
//         } else if (point1 === "sepiaa" || point2 === "sepiaa") {
//           mink = 0.5;
//           pointalbino = 0.5;
//         } else if (point1 === "colorpointa" || point2 === "colorpointa") {
//           colorpoint = 0.5;
//           pointalbino = 0.5;
//         } else if (point1 === "mochaa" || point2 === "mochaa") {
//           pointalbino = 0.5;
//           siamocha = 0.5;
//         } else {
//           pointalbino = 1;
//         }
//       } else if (point1 === "mocha" || point2 === "mocha") {
//         if (point1 === "mocha" && point2 === "mocha") {
//           mocha = 1;
//         } else if (point1 === "burmocha" || point2 === "burmocha") {
//           mocha = 0.5;
//           burmocha = 0.5;
//         } else if (point1 === "siamocha" || point2 === "siamocha") {
//           mocha = 0.5;
//           siamocha = 0.5;
//         } else if (point1 === "sepiaa" || point2 === "sepiaa") {
//           burmocha = 0.5;
//           mochaalbino = 0.5;
//         } else if (point1 === "colorpointa" || point2 === "colorpointa") {
//           siamocha = 0.5;
//           mochaalbino = 0.5;
//         } else if (point1 === "mochaa" || point2 === "siamochaa") {
//           mocha = 0.5;
//           mochaalbino = 0.5;
//         } else {
//           mochaalbino = 1;
//         }
//       } else if (point1 === "burmocha" || point2 === "burmocha") {
//         if (point1 === "burmocha" && point2 === "burmocha") {
//           sepia = 0.25;
//           burmocha = 0.5;
//           mocha = 0.25;
//         } else if (point1 === "siamocha" || point2 === "siamocha") {
//           mink = 0.25;
//           burmocha = 0.25;
//           siamocha = 0.25;
//           mocha = 0.25;
//         } else if (point1 === "sepiaa" || point2 === "sepiaa") {
//           sepia = 0.25;
//           burmocha = 0.25;
//           sepiaalbino = 0.25;
//           mochaalbino = 0.25;
//         } else if (point1 === "colorpointa" || point2 === "colorpointa") {
//           mink = 0.25;
//           siamocha = 0.25;
//           sepiaalbino = 0.25;
//           mochaalbino = 0.25;
//         } else if (point1 === "mochaa" || point2 === "mochaa") {
//           mocha = 0.25;
//           mochaalbino = 0.5;
//           albino = 0.25;
//         } else {
//           sepiaalbino = 0.5;
//           mochaalbino = 0.5;
//         }
//       } else if (point1 === "siamocha" || point2 === "siamocha") {
//         if (point1 === "siamocha" && point2 === "siamocha") {
//           colorpoint = 0.25;
//           siamocha = 0.5;
//           mocha = 0.25;
//         } else if (point1 === "sepiaa" || point2 === "sepiaa") {
//           mink = 0.25;
//           burmocha = 0.25;
//           pointalbino = 0.25;
//           mochaalbino = 0.25;
//         } else if (point1 === "colorpointa" || point2 === "colorpointa") {
//           colorpoint = 0.25;
//           siamocha = 0.25;
//           pointalbino = 0.25;
//           mochaalbino = 0.25;
//         } else if (point1 === "mochaa" || point2 === "mochaa") {
//           siamocha = 0.25;
//           mocha = 0.25;
//           pointalbino = 0.25;
//           mochaalbino = 0.25;
//         } else {
//           pointalbino = 0.5;
//           mochaalbino = 0.5;
//         }
//       } else if (point1 === "sepiaa" || point2 === "sepiaa") {
//         if (point1 === "sepiaa" && point2 === "sepiaa") {
//           sepia = 0.25;
//           sepiaalbino = 0.5;
//           albino = 0.25;
//         } else if (point1 === "colorpointa" || point2 === "colorpointa") {
//           mink = 0.25;
//           sepiaalbino = 0.25;
//           pointalbino = 0.25;
//           albino = 0.25
//         } else if (point1 === "mochaa" || point2 === "mochaa") {
//           burmocha = 0.25;
//           sepiaalbino = 0.25;
//           mochaalbino = 0.25;
//           albino = 0.25;
//         } else {
//           sepiaalbino = 0.5;
//           albino = 0.5;
//         }
//       } else if (point1 === "colorpointa" || point2 === "colorpointa") {
//         if (point1 === "colorpointa" && point2 === "colorpointa") {
//           colorpoint = 0.25;
//           pointalbino = 0.5;
//           albino = 0.25;
//         } else if (point1 === "mochaa" || point2 === "mochaa") {
//           siamocha = 0.25;
//           pointalbino = 0.25;
//           mochaalbino = 0.25;
//           albino = 0.25;
//         } else {
//           pointalbino = 0.5;
//           albino = 0.5;
//         }
//       } else if (point1 === "mochaa" || point2 === "mochaa") {
//         if (point1 === "mochaa" && point2 === "mochaa") {
//           mocha = 0.25;
//           mochaalbino = 0.5;
//           albino = 0.25;
//         } else {
//           mochaalbino = 0.5;
//           albino = 0.5;
//         }
//       } else {
//         albino = 1;
//       }
  
//       var clocus = [];
  
//       if (standard !== 0) {
//         clocus.push(standard * 100 + "% no color restriction");
//       }
//       if (sepia !== 0) {
//         clocus.push(sepia * 100 + "% sepia");
//       }
//       if (mink !== 0) {
//         clocus.push(mink * 100 + "% mink");
//       }
//       if (colorpoint !== 0) {
//         clocus.push(colorpoint * 100 + "% colorpoint");
//       }
//       if (mocha !== 0) {
//         clocus.push(mocha * 100 + "% mocha");
//       }
//       if (siamocha !== 0) {
//         clocus.push(siamocha * 100 + "% siamocha");
//       }
//       if (burmocha !== 0) {
//         clocus.push(burmocha * 100 + "% burmocha");
//       }
//       if (sepiaalbino !== 0) {
//         clocus.push(sepiaalbino * 100 + "% sepia-albino");
//       }
//       if (pointalbino !== 0) {
//         clocus.push(pointalbino * 100 + "% point-albino");
//       }
//       if (mochaalbino !== 0) {
//         clocus.push(mochaalbino * 100 + "% mocha-albino");
//       }
//       if (albino !== 0) {
//         clocus.push(albino * 100 + "% albino");
//       }
  
//       if ($('#linebreak').is(':checked')) {
//         return clocus.join(", <br>");
//       } else {
//         return clocus.join(", ");
//       }
  
//     }
  
//     function white() {
    
//       var white1 = $("#white1").val();
//       var white2 = $("#white2").val();
//       var domwhite = 0;
//       var highwhite = 0;
//       var lowwhite = 0;
//       var gloves = 0;
//       var nowhite = 0;
  
//       if (white1 === "domwhite" || white2 === "domwhite"){
//         domwhite = 1;
//       } else if (white1 === "domwhitespot" || white2 === "domwhitespot"){
//         if (white1 === "domwhitespot" && white2 === "domwhitespot"){
//           domwhite = 0.75;
//           highwhite = 0.25;
//         } else if (white1 === "domwhitenone" || white2 === "domwhitenone" || white1 === "domwhiteglove" || white2 === "domwhiteglove") {
//           domwhite = 0.75;
//           nowhite = 0.25;
//         } else if (white1 === "highwhite" || white2 === "highwhite"){
//           domwhite = 0.5;
//           highwhite = 0.5;
//         } else if (white1 === "lowwhite" || white2 === "lowwhite" || white1 === "lowwhiteglove" || white2 === "lowwhiteglove"){
//           domwhite = 0.5;
//           highwhite = 0.25;
//           lowwhite = 0.25;
//         } else {
//           domwhite = 0.5;
//           lowwhite = 0.5;
//         }
//       } else if (white1 === "domwhitenone" || white2 === "domwhitenone"){
//         if (white1 === "domwhitenone" && white2 === "domwhitenone"){
//           domwhite = 0.75;
//           nowhite = 0.25
//         } else if (white1 === "domwhiteglove" || white2 === "domwhiteglove"){
//           domwhite = 0.75;
//           nowhite = 0.25
//         } else if (white1 === "highwhite" || white2 === "highwhite"){
//           domwhite = 0.5;
//           lowwhite = 0.5;
//         } else if (white1 === "lowwhite" || white2 === "lowwhite" || white1 === "lowwhiteglove" || white2 === "lowwhiteglove"){
//           domwhite = 0.5;
//           lowwhite = 0.25;
//           nowhite = 0.25;
//         } else {
//           domwhite = 0.5;
//           nowhite = 0.5;
//         }
//       } else if (white1 === "domwhiteglove" || white2 === "domwhiteglove"){
//         if (white1 === "domwhiteglove" && white2 === "domwhiteglove"){
//           domwhite = 0.75;
//           gloves = 0.25;
//         } else if (white1 === "highwhite" || white2 === "highwhite"){
//           domwhite = 0.5;
//           lowwhite = 0.5;
//         } else if (white1 === "lowwhite" || white2 === "lowwhite"){
//           domwhite = 0.5;
//           lowwhite = 0.25;
//           nowhite = 0.25
//         } else if (white1 === "lowwhiteglove" || white2 === "lowwhiteglove"){
//           domwhite = 0.5;
//           lowwhite = 0.25;
//           gloves = 0.25;
//         } else if (white1 === "nowhite" || white2 === "nowhite"){
//           domwhite = 0.5;
//           nowhite = 0.5;
//         } else if (white1 === "glovehet" || white2 === "glovehet"){
//           domwhite = 0.5;
//           gloves = 0.25;
//           nowhite = 0.25;
//         } else {
//           domwhite = 0.5;
//           gloves = 0.5;
//         }
//       } else if (white1 === "highwhite" || white2 === "highwhite"){
//         if (white1 === "highwhite" && white2 === "highwhite"){
//           highwhite = 1;
//         } else if (white1 === "lowwhite" || white2 === "lowwhite" || white1 === "lowwhiteglove" || white2 === "lowwhiteglove"){
//           highwhite = 0.5;
//           lowwhite = 0.5;
//         } else {
//           lowwhite = 1;
//         }
//       } else if (white1 === "lowwhite" || white2 === "lowwhite"){
//         if (white1 === "lowwhite" && white2 === "lowwhite"){
//           highwhite = 0.25;
//           lowwhite = 0.5;
//           nowhite = 0.25;
//         } else if (white1 === "lowwhiteglove" || white2 === "lowwhiteglove"){
//           highwhite = 0.25;
//           lowwhite = 0.5;
//           nowhite = 0.25;
//         } else {
//           lowwhite = 0.5;
//           nowhite = 0.5;
//         }
//       } else if (white1 === "lowwhiteglove" || white2 === "lowwhiteglove"){
//         if (white1 === "lowwhiteglove" && white2 === "lowwhiteglove"){
//           highwhite = 0.25;
//           lowwhite = 0.5;
//           gloves = 0.25;
//         } else if (white1 === "nowhite" || white2 === "nowhite"){
//           lowwhite = 0.5;
//           nowhite = 0.5;
//         } else if (white1 === "glovehet" || white2 === "glovehet"){
//           lowwhite = 0.5;
//           gloves = 0.25;
//           nowhite = 0.25;
//         } else {
//           lowwhite = 0.5;
//           gloves = 0.5;
//         }
//       } else if (white1 === "nowhite" || white2 === "nowhite"){
//         nowhite = 1;
//       } else if (white1 === "glovehet" || white2 === "glovehet"){
//         if (white1 === "glovehet" && white2 === "glovehet"){
//           nowhite = 0.75;
//           gloves = 0.25;
//         } else {
//           nowhite = 0.5;
//           gloves = 0.5;
//         }
//       } else {
//         gloves = 1;
//       }
      
//       var white = [];
      
//       if (domwhite !== 0) {
//         white.push(domwhite * 100 + "% dominant white");
//       }
//       if (highwhite !== 0) {
//         white.push(highwhite * 100 + "% over half white spotting");
//       }
//       if (lowwhite !== 0) {
//         white.push(lowwhite * 100 + "% under half white spotting");
//       }
//       if (gloves !== 0) {
//         white.push(gloves * 100 + "% white gloves");
//       }
//       if (nowhite !== 0) {
//         white.push(nowhite * 100 + "% no white spotting");
//       }
      
//       if ($('#linebreak').is(':checked')) {
//         return white.join(", <br>");
//       } else {
//         return white.join(", ");
//       }
      
//     }
  
//     function karpati() {
    
//       var karpati1 = $("#karpati1").val();
//       var karpati2 = $("#karpati2").val();
//       var karpati;
  
//       if (karpati1 === "karpati" || karpati2 === "karpati") {
//         return "100% karpati."
//       } else if (karpati1 === "nokarpati" && karpati2 === "nokarpati") {
//         return "100% non-karpati."
//       } else if (karpati1 === "karpatihet" && karpati2 === "karpatihet") {
//         return "75% karpati, 25% non-karpati."
//       } else {
//         return "50% karpati, 50% non-karpati."
//       }
    
//     }
    
    
  
  
  
//     // BODY MODS
  
    
//     function ears(){
      
//       var curl1 = $("#curl1").val();
//       var curl2 = $("#curl2").val();
//       var curl;
      
//       if (curl1 === "curl" || curl2 === "curl") {
//         curl= 1;
//       } else if (curl1 === "nocurl" && curl2 === "nocurl") {
//         curl = 0;
//       } else if (curl1 === "curlhet" && curl2 === "curlhet") {
//         curl = 0.75;
//       } else {
//         curl = 0.5;
//       }
      
//       var noncurl = 1 - curl;
      
//       var fold1 = $("#fold1").val();
//       var fold2 = $("#fold2").val();
//       var fold;
      
//       if (fold1 === "nofold" && fold2 === "nofold") {
//         fold = 0;
//       } else if (fold1 === "foldhet" && fold2 === "foldhet") {
//         fold = 0.66;
//       } else {
//         fold = 0.5;
//       }
      
//       var nonfold = 1 - fold;
      
//       var normalears = nonfold * noncurl;
//       var curlears = nonfold * curl;
//       var foldears = fold * noncurl;
//       var foldcurlears = fold * curl;
      
//       var ears = [];
      
//       if (normalears !== 0) {
//         ears.push(normalears * 100 + "% normal ears");
//       }
//       if (curlears !== 0) {
//         ears.push(curlears * 100 + "% curled ears");
//       }
//       if (foldears !== 0) {
//         ears.push(foldears * 100 + "% folded ears");
//       }
//       if (foldcurlears !== 0) {
//         ears.push(foldcurlears * 100 + "% backwards folded ears");
//       }
      
//       if ($('#linebreak').is(':checked')) {
//         return ears.join(", <br>");
//       } else {
//         return ears.join(", ");
//       }
//     }
    
    
//     function tail(){
    
//       var manx1 = $("#manx1").val();
//       var manx2 = $("#manx2").val();
//       var manx;
      
//       if (manx1 === "nomanx" && manx2 === "nomanx") {
//         manx = 0;
//       } else if (manx1 === "manx" && manx2 === "manx") {
//         manx = 0.66;
//       } else {
//         manx = 0.5;
//       }
      
//       var nomanx = 1 - manx;
      
      
//       var bob1 = $("#bob1").val();
//       var bob2 = $("#bob2").val();
//       var jb = 0;
//       var kinked = 0;
//       var nojb = 0;
      
//       if (bob1 === "nobob" || bob2 === "nobob"){
//         if (bob1 === "nobob" && bob2 === "nobob"){
//           nojb = 1;
//         } else if (bob1 === "bob" || bob2 === "bob"){
//           kinked = 1;
//         } else {
//           nojb = 0.5;
//           kinked = 0.5;
//         } 
//       } else if (bob1 === "bob" || bob2 === "bob"){
//         if (bob1 === "bob" && bob2 === "bob"){
//           jb = 1;
//         } else {
//           jb = 0.5;
//           kinked = 0.5;
//         }
//       } else {
//         jb = 0.25;
//         kinked = 0.5;
//         nojb = 0.25;
//       }
      
//       var ringtail1 = $("#ringtail1").val();
//       var ringtail2 = $("#ringtail2").val();
//       var ring;
      
//       if (ringtail1 === "ring" || ringtail2 === "ring") {
//         ring = 1;
//       } else if (ringtail1 === "noring" && ringtail2 === "noring") {
//         ring = 0;
//       } else if (ringtail1 === "ringhet" && ringtail2 === "ringhet") {
//         ring = 0.75;
//       } else {
//         ring = 0.5;
//       }
      
//       var noring = 1 - ring;
      
      
//       var normaltail = nomanx * nojb * noring;
      
//       var manxtail = manx * nojb * noring;
//       var jbtail = nomanx * jb * (noring * ring);
//       var kinkedtail = nomanx * kinked * noring;
//       var ringtail = nomanx * nojb * ring;
      
//       var manxring = manx * nojb * noring;
//       var manxjb = manx * jb * noring;
//       var manxkinked = manx * kinked * noring;
//       var ringkinked = nomanx * kinked * ring;
//       var manxringkinked = manx * kinked * ring;
      
      
//       var tail = [];
      
//       if (normaltail !== 0) {
//         tail.push(normaltail * 100 + "% normal tail");
//       }
//       if (manxtail !== 0) {
//         tail.push(manxtail * 100 + "% Manx short tail");
//       }
//       if (kinkedtail !== 0) {
//         tail.push(kinkedtail * 100 + "% shortened/kinked tail");
//       }
//       if (jbtail !== 0) {
//         tail.push(jbtail * 100 + "% Asian-type bobtail");
//       }
//       if (ringtail !== 0) {
//         tail.push(ringtail * 100 + "% ringtail");
//       }
//       if (manxring !== 0) {
//         tail.push(manxring * 100 + "% Manx short tail + ringtail");
//       }
//       if (manxjb !== 0) {
//         tail.push(manxjb * 100 + "% Manx short tail + Asian-type bobtail");
//       }
//       if (manxkinked !== 0) {
//         tail.push(manxkinked * 100 + "% Manx short tail + shortened/kinked tail");
//       }
//       if (ringkinked !== 0) {
//         tail.push(ringkinked * 100 + "% shortened/kinked tail + ringtail");
//       }
//       if (manxringkinked !== 0) {
//         tail.push(manxringkinked * 100 + "% Manx short tail + shortened/kinked tail + ringtail");
//       }
      
//       if ($('#linebreak').is(':checked')) {
//         return tail.join(", <br>");
//       } else {
//         return tail.join(", ");
//       }
      
//     }
  
//     function munchkin(){
//       var munchkin1 = $("#munchkin1").val();
//       var munchkin2 = $("#munchkin2").val();
      
//       if (munchkin1 === "nomunchkin" && munchkin2 === "nomunchkin") {
//         return "100% normal leg length. "
//       } else if (munchkin1 === "munchkin" && munchkin2 === "munchkin") {
//         return "33% normal leg length, 66% munchkin. "
//       } else {
//         return "50% normal leg length, 50% munchkin. "
//       }
//     }
    
//     function toes() {
    
//       var toes1 = $("#toes1").val();
//       var toes2 = $("#toes2").val();
  
//       if (toes1 === "toes" || toes2 === "toes") {
//         return "Up to 100% polydactyl."
//       } else if (toes1 === "notoes" && toes2 === "notoes") {
//         return "100% non-polydactyl."
//       } else if (toes1 === "toeshet" && toes2 === "toeshet") {
//         return "Up to 75% polydactyl."
//       } else {
//         return "Up to 50% polydactyl."
//       }
//     }
    
  
//     //FINISH UP!
  
//     var linebreak = "";
//     if ($('#linebreak').is(':checked')) {
//       linebreak = "<br>"
//     }
  
  
//     $('.resultfur').html("<b>Pelt types: </b>" + linebreak + pelt() + ".");
  
//     $('.resultcolorm').html("<b>Colors for toms: </b>" + linebreak + basecolorm() + ".");
  
//     $('.resultcolorf').html("<b>Colors for mollies: </b>" + linebreak + basecolorf() + ".");
  
//     $('.resultmods').html("<b>Non-red cats: </b>" + linebreak + tabbymods() + ".");
  
//     $('.resultredmods').html("<b>Red-based cats:</b>" + linebreak + tabbymodsred() + ".");
  
//     $('.resulttabby').html("<b>Tabby patterns: </b>" + linebreak + tabbytype() + ".");
  
//     $('.resultpattern').html("<b>Other patterns: </b><br>" + point() + ".<br>" + linebreak + white() + ".<br>" + linebreak + karpati());
    
//     $('.resultother').html("<b>Body mods: </b><br>" + ears() + ".<br>" + linebreak + tail() + ". <br>" + linebreak + munchkin() + "<br>" + linebreak + toes());
// }



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if (req.method === 'POST') {
    console.log(JSON.parse(req.body));
    const x = {
        name: "Top Level",
        children: [
          {
            name: "Level 2: A",
            children: [{ name: "Son of A" }, { name: "Daughter of A" }]
          },
          { name: "Level 2: B" }
        ]
  };
    res.status(200).json(x)
  } else {
    res.status(403).json({ name: 'zzzz' })
  }
}
