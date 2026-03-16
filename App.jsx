"use strict";

import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

//Globally maps each item to its respective: Name, Question, Answer and Options (each option with its own index and sprite)
const S = [
  {N:"A1", Q:"/Q/A1.png", A:"4", O:[{index:1, sprite:"/O/A1_1.png"},{index:2, sprite:"/O/A1_2.png"},{index:3, sprite:"/O/A1_3.png"},{index:4, sprite:"/O/A1_4.png"},{index:5, sprite:"/O/A1_5.png"},{index:6, sprite:"/O/A1_6.png"}]},
  {N:"A2", Q:"/Q/A2.png", A:"5", O:[{index:1, sprite:"/O/A2_1.png"},{index:2, sprite:"/O/A2_2.png"},{index:3, sprite:"/O/A2_3.png"},{index:4, sprite:"/O/A2_4.png"},{index:5, sprite:"/O/A2_5.png"},{index:6, sprite:"/O/A2_6.png"}]},
  {N:"A3", Q:"/Q/A3.png", A:"1", O:[{index:1, sprite:"/O/A3_1.png"},{index:2, sprite:"/O/A3_2.png"},{index:3, sprite:"/O/A3_3.png"},{index:4, sprite:"/O/A3_4.png"},{index:5, sprite:"/O/A3_5.png"},{index:6, sprite:"/O/A3_6.png"}]},
  {N:"A4", Q:"/Q/A4.png", A:"2", O:[{index:1, sprite:"/O/A4_1.png"},{index:2, sprite:"/O/A4_2.png"},{index:3, sprite:"/O/A4_3.png"},{index:4, sprite:"/O/A4_4.png"},{index:5, sprite:"/O/A4_5.png"},{index:6, sprite:"/O/A4_6.png"}]},
  {N:"A5", Q:"/Q/A5.png", A:"6", O:[{index:1, sprite:"/O/A5_1.png"},{index:2, sprite:"/O/A5_2.png"},{index:3, sprite:"/O/A5_3.png"},{index:4, sprite:"/O/A5_4.png"},{index:5, sprite:"/O/A5_5.png"},{index:6, sprite:"/O/A5_6.png"}]},
  {N:"A6", Q:"/Q/A6.png", A:"3", O:[{index:1, sprite:"/O/A6_1.png"},{index:2, sprite:"/O/A6_2.png"},{index:3, sprite:"/O/A6_3.png"},{index:4, sprite:"/O/A6_4.png"},{index:5, sprite:"/O/A6_5.png"},{index:6, sprite:"/O/A6_6.png"}]},
  {N:"A7", Q:"/Q/A7.png", A:"6", O:[{index:1, sprite:"/O/A7_1.png"},{index:2, sprite:"/O/A7_2.png"},{index:3, sprite:"/O/A7_3.png"},{index:4, sprite:"/O/A7_4.png"},{index:5, sprite:"/O/A7_5.png"},{index:6, sprite:"/O/A7_6.png"}]},
  {N:"A8", Q:"/Q/A8.png", A:"2", O:[{index:1, sprite:"/O/A8_1.png"},{index:2, sprite:"/O/A8_2.png"},{index:3, sprite:"/O/A8_3.png"},{index:4, sprite:"/O/A8_4.png"},{index:5, sprite:"/O/A8_5.png"},{index:6, sprite:"/O/A8_6.png"}]},
  {N:"A9", Q:"/Q/A9.png", A:"1", O:[{index:1, sprite:"/O/A9_1.png"},{index:2, sprite:"/O/A9_2.png"},{index:3, sprite:"/O/A9_3.png"},{index:4, sprite:"/O/A9_4.png"},{index:5, sprite:"/O/A9_5.png"},{index:6, sprite:"/O/A9_6.png"}]},
  {N:"A10", Q:"/Q/A10.png", A:"3", O:[{index:1, sprite:"/O/A10_1.png"},{index:2, sprite:"/O/A10_2.png"},{index:3, sprite:"/O/A10_3.png"},{index:4, sprite:"/O/A10_4.png"},{index:5, sprite:"/O/A10_5.png"},{index:6, sprite:"/O/A10_6.png"}]},
  {N:"A11", Q:"/Q/A11.png", A:"5", O:[{index:1, sprite:"/O/A11_1.png"},{index:2, sprite:"/O/A11_2.png"},{index:3, sprite:"/O/A11_3.png"},{index:4, sprite:"/O/A11_4.png"},{index:5, sprite:"/O/A11_5.png"},{index:6, sprite:"/O/A11_6.png"}]},
  {N:"A12", Q:"/Q/A12.png", A:"4", O:[{index:1, sprite:"/O/A12_1.png"},{index:2, sprite:"/O/A12_2.png"},{index:3, sprite:"/O/A12_3.png"},{index:4, sprite:"/O/A12_4.png"},{index:5, sprite:"/O/A12_5.png"},{index:6, sprite:"/O/A12_6.png"}]},

  {N:"B1", Q:"/Q/B1.png", A:"2", O:[{index:1, sprite:"/O/B1_1.png"},{index:2, sprite:"/O/B1_2.png"},{index:3, sprite:"/O/B1_3.png"},{index:4, sprite:"/O/B1_4.png"},{index:5, sprite:"/O/B1_5.png"},{index:6, sprite:"/O/B1_6.png"}]},
  {N:"B2", Q:"/Q/B2.png", A:"6", O:[{index:1, sprite:"/O/B2_1.png"},{index:2, sprite:"/O/B2_2.png"},{index:3, sprite:"/O/B2_3.png"},{index:4, sprite:"/O/B2_4.png"},{index:5, sprite:"/O/B2_5.png"},{index:6, sprite:"/O/B2_6.png"}]},
  {N:"B3", Q:"/Q/B3.png", A:"1", O:[{index:1, sprite:"/O/B3_1.png"},{index:2, sprite:"/O/B3_2.png"},{index:3, sprite:"/O/B3_3.png"},{index:4, sprite:"/O/B3_4.png"},{index:5, sprite:"/O/B3_5.png"},{index:6, sprite:"/O/B3_6.png"}]},
  {N:"B4", Q:"/Q/B4.png", A:"2", O:[{index:1, sprite:"/O/B4_1.png"},{index:2, sprite:"/O/B4_2.png"},{index:3, sprite:"/O/B4_3.png"},{index:4, sprite:"/O/B4_4.png"},{index:5, sprite:"/O/B4_5.png"},{index:6, sprite:"/O/B4_6.png"}]},
  {N:"B5", Q:"/Q/B5.png", A:"1", O:[{index:1, sprite:"/O/B5_1.png"},{index:2, sprite:"/O/B5_2.png"},{index:3, sprite:"/O/B5_3.png"},{index:4, sprite:"/O/B5_4.png"},{index:5, sprite:"/O/B5_5.png"},{index:6, sprite:"/O/B5_6.png"}]},
  {N:"B6", Q:"/Q/B6.png", A:"3", O:[{index:1, sprite:"/O/B6_1.png"},{index:2, sprite:"/O/B6_2.png"},{index:3, sprite:"/O/B6_3.png"},{index:4, sprite:"/O/B6_4.png"},{index:5, sprite:"/O/B6_5.png"},{index:6, sprite:"/O/B6_6.png"}]},
  {N:"B7", Q:"/Q/B7.png", A:"5", O:[{index:1, sprite:"/O/B7_1.png"},{index:2, sprite:"/O/B7_2.png"},{index:3, sprite:"/O/B7_3.png"},{index:4, sprite:"/O/B7_4.png"},{index:5, sprite:"/O/B7_5.png"},{index:6, sprite:"/O/B7_6.png"}]},
  {N:"B8", Q:"/Q/B8.png", A:"6", O:[{index:1, sprite:"/O/B8_1.png"},{index:2, sprite:"/O/B8_2.png"},{index:3, sprite:"/O/B8_3.png"},{index:4, sprite:"/O/B8_4.png"},{index:5, sprite:"/O/B8_5.png"},{index:6, sprite:"/O/B8_6.png"}]},
  {N:"B9", Q:"/Q/B9.png", A:"4", O:[{index:1, sprite:"/O/B9_1.png"},{index:2, sprite:"/O/B9_2.png"},{index:3, sprite:"/O/B9_3.png"},{index:4, sprite:"/O/B9_4.png"},{index:5, sprite:"/O/B9_5.png"},{index:6, sprite:"/O/B9_6.png"}]},
  {N:"B10", Q:"/Q/B10.png", A:"3", O:[{index:1, sprite:"/O/B10_1.png"},{index:2, sprite:"/O/B10_2.png"},{index:3, sprite:"/O/B10_3.png"},{index:4, sprite:"/O/B10_4.png"},{index:5, sprite:"/O/B10_5.png"},{index:6, sprite:"/O/B10_6.png"}]},
  {N:"B11", Q:"/Q/B11.png", A:"4", O:[{index:1, sprite:"/O/B11_1.png"},{index:2, sprite:"/O/B11_2.png"},{index:3, sprite:"/O/B11_3.png"},{index:4, sprite:"/O/B11_4.png"},{index:5, sprite:"/O/B11_5.png"},{index:6, sprite:"/O/B11_6.png"}]},
  {N:"B12", Q:"/Q/B12.png", A:"5", O:[{index:1, sprite:"/O/B12_1.png"},{index:2, sprite:"/O/B12_2.png"},{index:3, sprite:"/O/B12_3.png"},{index:4, sprite:"/O/B12_4.png"},{index:5, sprite:"/O/B12_5.png"},{index:6, sprite:"/O/B12_6.png"}]},

  {N:"C1", Q:"/Q/C1.png", A:"8", O:[{index:1, sprite:"/O/C1_1.png"},{index:2, sprite:"/O/C1_2.png"},{index:3, sprite:"/O/C1_3.png"},{index:4, sprite:"/O/C1_4.png"},{index:5, sprite:"/O/C1_5.png"},{index:6, sprite:"/O/C1_6.png"}, {index:7, sprite:"/O/C1_7.png"}, {index:8, sprite:"/O/C1_8.png"}]},
  {N:"C2", Q:"/Q/C2.png", A:"2", O:[{index:1, sprite:"/O/C2_1.png"},{index:2, sprite:"/O/C2_2.png"},{index:3, sprite:"/O/C2_3.png"},{index:4, sprite:"/O/C2_4.png"},{index:5, sprite:"/O/C2_5.png"},{index:6, sprite:"/O/C2_6.png"}, {index:7, sprite:"/O/C2_7.png"}, {index:8, sprite:"/O/C2_8.png"}]},
  {N:"C3", Q:"/Q/C3.png", A:"3", O:[{index:1, sprite:"/O/C3_1.png"},{index:2, sprite:"/O/C3_2.png"},{index:3, sprite:"/O/C3_3.png"},{index:4, sprite:"/O/C3_4.png"},{index:5, sprite:"/O/C3_5.png"},{index:6, sprite:"/O/C3_6.png"}, {index:7, sprite:"/O/C3_7.png"}, {index:8, sprite:"/O/C3_8.png"}]},
  {N:"C4", Q:"/Q/C4.png", A:"8", O:[{index:1, sprite:"/O/C4_1.png"},{index:2, sprite:"/O/C4_2.png"},{index:3, sprite:"/O/C4_3.png"},{index:4, sprite:"/O/C4_4.png"},{index:5, sprite:"/O/C4_5.png"},{index:6, sprite:"/O/C4_6.png"}, {index:7, sprite:"/O/C4_7.png"}, {index:8, sprite:"/O/C4_8.png"}]},
  {N:"C5", Q:"/Q/C5.png", A:"7", O:[{index:1, sprite:"/O/C5_1.png"},{index:2, sprite:"/O/C5_2.png"},{index:3, sprite:"/O/C5_3.png"},{index:4, sprite:"/O/C5_4.png"},{index:5, sprite:"/O/C5_5.png"},{index:6, sprite:"/O/C5_6.png"}, {index:7, sprite:"/O/C5_7.png"}, {index:8, sprite:"/O/C5_8.png"}]},
  {N:"C6", Q:"/Q/C6.png", A:"4", O:[{index:1, sprite:"/O/C6_1.png"},{index:2, sprite:"/O/C6_2.png"},{index:3, sprite:"/O/C6_3.png"},{index:4, sprite:"/O/C6_4.png"},{index:5, sprite:"/O/C6_5.png"},{index:6, sprite:"/O/C6_6.png"}, {index:7, sprite:"/O/C6_7.png"}, {index:8, sprite:"/O/C6_8.png"}]},
  {N:"C7", Q:"/Q/C7.png", A:"5", O:[{index:1, sprite:"/O/C7_1.png"},{index:2, sprite:"/O/C7_2.png"},{index:3, sprite:"/O/C7_3.png"},{index:4, sprite:"/O/C7_4.png"},{index:5, sprite:"/O/C7_5.png"},{index:6, sprite:"/O/C7_6.png"}, {index:7, sprite:"/O/C7_7.png"}, {index:8, sprite:"/O/C7_8.png"}]},
  {N:"C8", Q:"/Q/C8.png", A:"1", O:[{index:1, sprite:"/O/C8_1.png"},{index:2, sprite:"/O/C8_2.png"},{index:3, sprite:"/O/C8_3.png"},{index:4, sprite:"/O/C8_4.png"},{index:5, sprite:"/O/C8_5.png"},{index:6, sprite:"/O/C8_6.png"}, {index:7, sprite:"/O/C8_7.png"}, {index:8, sprite:"/O/C8_8.png"}]},
  {N:"C9", Q:"/Q/C9.png", A:"7", O:[{index:1, sprite:"/O/C9_1.png"},{index:2, sprite:"/O/C9_2.png"},{index:3, sprite:"/O/C9_3.png"},{index:4, sprite:"/O/C9_4.png"},{index:5, sprite:"/O/C9_5.png"},{index:6, sprite:"/O/C9_6.png"}, {index:7, sprite:"/O/C9_7.png"}, {index:8, sprite:"/O/C9_8.png"}]},
  {N:"C10", Q:"/Q/C10.png", A:"6", O:[{index:1, sprite:"/O/C10_1.png"},{index:2, sprite:"/O/C10_2.png"},{index:3, sprite:"/O/C10_3.png"},{index:4, sprite:"/O/C10_4.png"},{index:5, sprite:"/O/C10_5.png"},{index:6, sprite:"/O/C10_6.png"}, {index:7, sprite:"/O/C10_7.png"}, {index:8, sprite:"/O/C10_8.png"}]},
  {N:"C11", Q:"/Q/C11.png", A:"1", O:[{index:1, sprite:"/O/C11_1.png"},{index:2, sprite:"/O/C11_2.png"},{index:3, sprite:"/O/C11_3.png"},{index:4, sprite:"/O/C11_4.png"},{index:5, sprite:"/O/C11_5.png"},{index:6, sprite:"/O/C11_6.png"}, {index:7, sprite:"/O/C11_7.png"}, {index:8, sprite:"/O/C11_8.png"}]},
  {N:"C12", Q:"/Q/C12.png", A:"2", O:[{index:1, sprite:"/O/C12_1.png"},{index:2, sprite:"/O/C12_2.png"},{index:3, sprite:"/O/C12_3.png"},{index:4, sprite:"/O/C12_4.png"},{index:5, sprite:"/O/C12_5.png"},{index:6, sprite:"/O/C12_6.png"}, {index:7, sprite:"/O/C12_7.png"}, {index:8, sprite:"/O/C12_8.png"}]},

  {N:"D1", Q:"/Q/D1.png", A:"3", O:[{index:1, sprite:"/O/D1_1.png"},{index:2, sprite:"/O/D1_2.png"},{index:3, sprite:"/O/D1_3.png"},{index:4, sprite:"/O/D1_4.png"},{index:5, sprite:"/O/D1_5.png"},{index:6, sprite:"/O/D1_6.png"}, {index:7, sprite:"/O/D1_7.png"}, {index:8, sprite:"/O/D1_8.png"}]},
  {N:"D2", Q:"/Q/D2.png", A:"4", O:[{index:1, sprite:"/O/D2_1.png"},{index:2, sprite:"/O/D2_2.png"},{index:3, sprite:"/O/D2_3.png"},{index:4, sprite:"/O/D2_4.png"},{index:5, sprite:"/O/D2_5.png"},{index:6, sprite:"/O/D2_6.png"}, {index:7, sprite:"/O/D2_7.png"}, {index:8, sprite:"/O/D2_8.png"}]},
  {N:"D3", Q:"/Q/D3.png", A:"3", O:[{index:1, sprite:"/O/D3_1.png"},{index:2, sprite:"/O/D3_2.png"},{index:3, sprite:"/O/D3_3.png"},{index:4, sprite:"/O/D3_4.png"},{index:5, sprite:"/O/D3_5.png"},{index:6, sprite:"/O/D3_6.png"}, {index:7, sprite:"/O/D3_7.png"}, {index:8, sprite:"/O/D3_8.png"}]},
  {N:"D4", Q:"/Q/D4.png", A:"7", O:[{index:1, sprite:"/O/D4_1.png"},{index:2, sprite:"/O/D4_2.png"},{index:3, sprite:"/O/D4_3.png"},{index:4, sprite:"/O/D4_4.png"},{index:5, sprite:"/O/D4_5.png"},{index:6, sprite:"/O/D4_6.png"}, {index:7, sprite:"/O/D4_7.png"}, {index:8, sprite:"/O/D4_8.png"}]},
  {N:"D5", Q:"/Q/D5.png", A:"8", O:[{index:1, sprite:"/O/D5_1.png"},{index:2, sprite:"/O/D5_2.png"},{index:3, sprite:"/O/D5_3.png"},{index:4, sprite:"/O/D5_4.png"},{index:5, sprite:"/O/D5_5.png"},{index:6, sprite:"/O/D5_6.png"}, {index:7, sprite:"/O/D5_7.png"}, {index:8, sprite:"/O/D5_8.png"}]},
  {N:"D6", Q:"/Q/D6.png", A:"6", O:[{index:1, sprite:"/O/D6_1.png"},{index:2, sprite:"/O/D6_2.png"},{index:3, sprite:"/O/D6_3.png"},{index:4, sprite:"/O/D6_4.png"},{index:5, sprite:"/O/D6_5.png"},{index:6, sprite:"/O/D6_6.png"}, {index:7, sprite:"/O/D6_7.png"}, {index:8, sprite:"/O/D6_8.png"}]},
  {N:"D7", Q:"/Q/D7.png", A:"5", O:[{index:1, sprite:"/O/D7_1.png"},{index:2, sprite:"/O/D7_2.png"},{index:3, sprite:"/O/D7_3.png"},{index:4, sprite:"/O/D7_4.png"},{index:5, sprite:"/O/D7_5.png"},{index:6, sprite:"/O/D7_6.png"}, {index:7, sprite:"/O/D7_7.png"}, {index:8, sprite:"/O/D7_8.png"}]},
  {N:"D8", Q:"/Q/D8.png", A:"4", O:[{index:1, sprite:"/O/D8_1.png"},{index:2, sprite:"/O/D8_2.png"},{index:3, sprite:"/O/D8_3.png"},{index:4, sprite:"/O/D8_4.png"},{index:5, sprite:"/O/D8_5.png"},{index:6, sprite:"/O/D8_6.png"}, {index:7, sprite:"/O/D8_7.png"}, {index:8, sprite:"/O/D8_8.png"}]},
  {N:"D9", Q:"/Q/D9.png", A:"1", O:[{index:1, sprite:"/O/D9_1.png"},{index:2, sprite:"/O/D9_2.png"},{index:3, sprite:"/O/D9_3.png"},{index:4, sprite:"/O/D9_4.png"},{index:5, sprite:"/O/D9_5.png"},{index:6, sprite:"/O/D9_6.png"}, {index:7, sprite:"/O/D9_7.png"}, {index:8, sprite:"/O/D9_8.png"}]},
  {N:"D10", Q:"/Q/D10.png", A:"2", O:[{index:1, sprite:"/O/D10_1.png"},{index:2, sprite:"/O/D10_2.png"},{index:3, sprite:"/O/D10_3.png"},{index:4, sprite:"/O/D10_4.png"},{index:5, sprite:"/O/D10_5.png"},{index:6, sprite:"/O/D10_6.png"}, {index:7, sprite:"/O/D10_7.png"}, {index:8, sprite:"/O/D10_8.png"}]},
  {N:"D11", Q:"/Q/D11.png", A:"5", O:[{index:1, sprite:"/O/D11_1.png"},{index:2, sprite:"/O/D11_2.png"},{index:3, sprite:"/O/D11_3.png"},{index:4, sprite:"/O/D11_4.png"},{index:5, sprite:"/O/D11_5.png"},{index:6, sprite:"/O/D11_6.png"}, {index:7, sprite:"/O/D11_7.png"}, {index:8, sprite:"/O/D11_8.png"}]},
  {N:"D12", Q:"/Q/D12.png", A:"6", O:[{index:1, sprite:"/O/D12_1.png"},{index:2, sprite:"/O/D12_2.png"},{index:3, sprite:"/O/D12_3.png"},{index:4, sprite:"/O/D12_4.png"},{index:5, sprite:"/O/D12_5.png"},{index:6, sprite:"/O/D12_6.png"}, {index:7, sprite:"/O/D12_7.png"}, {index:8, sprite:"/O/D12_8.png"}]},

  {N:"E1", Q:"/Q/E1.png", A:"7", O:[{index:1, sprite:"/O/E1_1.png"},{index:2, sprite:"/O/E1_2.png"},{index:3, sprite:"/O/E1_3.png"},{index:4, sprite:"/O/E1_4.png"},{index:5, sprite:"/O/E1_5.png"},{index:6, sprite:"/O/E1_6.png"}, {index:7, sprite:"/O/E1_7.png"}, {index:8, sprite:"/O/E1_8.png"}]},
  {N:"E2", Q:"/Q/E2.png", A:"6", O:[{index:1, sprite:"/O/E2_1.png"},{index:2, sprite:"/O/E2_2.png"},{index:3, sprite:"/O/E2_3.png"},{index:4, sprite:"/O/E2_4.png"},{index:5, sprite:"/O/E2_5.png"},{index:6, sprite:"/O/E2_6.png"}, {index:7, sprite:"/O/E2_7.png"}, {index:8, sprite:"/O/E2_8.png"}]},
  {N:"E3", Q:"/Q/E3.png", A:"8", O:[{index:1, sprite:"/O/E3_1.png"},{index:2, sprite:"/O/E3_2.png"},{index:3, sprite:"/O/E3_3.png"},{index:4, sprite:"/O/E3_4.png"},{index:5, sprite:"/O/E3_5.png"},{index:6, sprite:"/O/E3_6.png"}, {index:7, sprite:"/O/E3_7.png"}, {index:8, sprite:"/O/E3_8.png"}]},
  {N:"E4", Q:"/Q/E4.png", A:"2", O:[{index:1, sprite:"/O/E4_1.png"},{index:2, sprite:"/O/E4_2.png"},{index:3, sprite:"/O/E4_3.png"},{index:4, sprite:"/O/E4_4.png"},{index:5, sprite:"/O/E4_5.png"},{index:6, sprite:"/O/E4_6.png"}, {index:7, sprite:"/O/E4_7.png"}, {index:8, sprite:"/O/E4_8.png"}]},
  {N:"E5", Q:"/Q/E5.png", A:"1", O:[{index:1, sprite:"/O/E5_1.png"},{index:2, sprite:"/O/E5_2.png"},{index:3, sprite:"/O/E5_3.png"},{index:4, sprite:"/O/E5_4.png"},{index:5, sprite:"/O/E5_5.png"},{index:6, sprite:"/O/E5_6.png"}, {index:7, sprite:"/O/E5_7.png"}, {index:8, sprite:"/O/E5_8.png"}]},
  {N:"E6", Q:"/Q/E6.png", A:"5", O:[{index:1, sprite:"/O/E6_1.png"},{index:2, sprite:"/O/E6_2.png"},{index:3, sprite:"/O/E6_3.png"},{index:4, sprite:"/O/E6_4.png"},{index:5, sprite:"/O/E6_5.png"},{index:6, sprite:"/O/E6_6.png"}, {index:7, sprite:"/O/E6_7.png"}, {index:8, sprite:"/O/E6_8.png"}]},
  {N:"E7", Q:"/Q/E7.png", A:"2", O:[{index:1, sprite:"/O/E7_1.png"},{index:2, sprite:"/O/E7_2.png"},{index:3, sprite:"/O/E7_3.png"},{index:4, sprite:"/O/E7_4.png"},{index:5, sprite:"/O/E7_5.png"},{index:6, sprite:"/O/E7_6.png"}, {index:7, sprite:"/O/E7_7.png"}, {index:8, sprite:"/O/E7_8.png"}]},
  {N:"E8", Q:"/Q/E8.png", A:"4", O:[{index:1, sprite:"/O/E8_1.png"},{index:2, sprite:"/O/E8_2.png"},{index:3, sprite:"/O/E8_3.png"},{index:4, sprite:"/O/E8_4.png"},{index:5, sprite:"/O/E8_5.png"},{index:6, sprite:"/O/E8_6.png"}, {index:7, sprite:"/O/E8_7.png"}, {index:8, sprite:"/O/E8_8.png"}]},
  {N:"E9", Q:"/Q/E9.png", A:"1", O:[{index:1, sprite:"/O/E9_1.png"},{index:2, sprite:"/O/E9_2.png"},{index:3, sprite:"/O/E9_3.png"},{index:4, sprite:"/O/E9_4.png"},{index:5, sprite:"/O/E9_5.png"},{index:6, sprite:"/O/E9_6.png"}, {index:7, sprite:"/O/E9_7.png"}, {index:8, sprite:"/O/E9_8.png"}]},
  {N:"E10", Q:"/Q/E10.png", A:"6", O:[{index:1, sprite:"/O/E10_1.png"},{index:2, sprite:"/O/E10_2.png"},{index:3, sprite:"/O/E10_3.png"},{index:4, sprite:"/O/E10_4.png"},{index:5, sprite:"/O/E10_5.png"},{index:6, sprite:"/O/E10_6.png"}, {index:7, sprite:"/O/E10_7.png"}, {index:8, sprite:"/O/E10_8.png"}]},
  {N:"E11", Q:"/Q/E11.png", A:"3", O:[{index:1, sprite:"/O/E11_1.png"},{index:2, sprite:"/O/E11_2.png"},{index:3, sprite:"/O/E11_3.png"},{index:4, sprite:"/O/E11_4.png"},{index:5, sprite:"/O/E11_5.png"},{index:6, sprite:"/O/E11_6.png"}, {index:7, sprite:"/O/E11_7.png"}, {index:8, sprite:"/O/E11_8.png"}]},
  {N:"E12", Q:"/Q/E12.png", A:"5", O:[{index:1, sprite:"/O/E12_1.png"},{index:2, sprite:"/O/E12_2.png"},{index:3, sprite:"/O/E12_3.png"},{index:4, sprite:"/O/E12_4.png"},{index:5, sprite:"/O/E12_5.png"},{index:6, sprite:"/O/E12_6.png"}, {index:7, sprite:"/O/E12_7.png"}, {index:8, sprite:"/O/E12_8.png"}]},
]


const age_score = [
  {age_group: (x)=> x <= 12, scores:[
    {perc:1,   rang: (x)=> x            <= 14, diag: "Deficient", rank:"V"             },
    {perc:10,  rang: (x)=> x >  14 && x <= 24, diag: "Lower than average", rank:"IV"   },
    {perc:25,  rang: (x)=> x >  24 && x <= 33, diag: "Lower than average", rank:"IV+"  },
    {perc:50,  rang: (x)=> x >  33 && x <= 39, diag: "Average", rank:"III"             },
    {perc:75,  rang: (x)=> x >  39 && x <= 43, diag: "Higher than average", rank:"II"  },
    {perc:90,  rang: (x)=> x >  43 && x <= 47, diag: "Higher than average", rank:"II+" },
    {perc:99,  rang: (x)=> x >  47 && x <= 53, diag: "Superior", rank:"I"              },
    {perc:100, rang: (x)=> x >  53 && x <= 60, diag: "Superior", rank:"I"              }
  ]},
  {age_group: (x)=> x == 13 || x == 14, scores:[
    {perc:1,   rang: (x)=> x            <= 17, diag: "Deficient", rank:"V"            },
    {perc:10,  rang: (x)=> x >  17 && x <= 27, diag: "Lower than average", rank:"IV"  },
    {perc:25,  rang: (x)=> x >  27 && x <= 34, diag: "Lower than average", rank:"IV+" },
    {perc:50,  rang: (x)=> x >  34 && x <= 40, diag: "Average", rank:"III"            },
    {perc:75,  rang: (x)=> x >  40 && x <= 45, diag: "Higher than average", rank:"II" },
    {perc:90,  rang: (x)=> x >  45 && x <= 49, diag: "Higher than average", rank:"II+"},
    {perc:99,  rang: (x)=> x >  49 && x <= 54, diag: "Superior", rank:"I"             },
    {perc:100, rang: (x)=> x >  54 && x <= 60, diag: "Superior", rank:"I"             }
  ]},
  {age_group: (x)=> x == 15 || x == 16, scores:[
    {perc:1,   rang: (x)=> x            <= 19, diag: "Deficient", rank:"V"            },
    {perc:10,  rang: (x)=> x >  19 && x <= 29, diag: "Lower than average", rank:"IV"  },
    {perc:25,  rang: (x)=> x >  29 && x <= 35, diag: "Lower than average", rank:"IV+" },
    {perc:50,  rang: (x)=> x >  35 && x <= 41, diag: "Average", rank:"III"            },
    {perc:75,  rang: (x)=> x >  41 && x <= 46, diag: "Higher than average", rank:"II" },
    {perc:90,  rang: (x)=> x >  46 && x <= 50, diag: "Higher than average", rank:"II+"},
    {perc:99,  rang: (x)=> x >  50 && x <= 55, diag: "Superior", rank:"I"             },
    {perc:100, rang: (x)=> x >  55 && x <= 60, diag: "Superior", rank:"I"             }
  ]},
  {age_group: (x)=> x == 17, scores:[
    {perc:1,   rang: (x)=> x            <= 28, diag: "Deficient", rank:"V"            },
    {perc:10,  rang: (x)=> x >  28 && x <= 35, diag: "Lower than average", rank:"IV"  },
    {perc:25,  rang: (x)=> x >  35 && x <= 39, diag: "Lower than average", rank:"IV+" },
    {perc:50,  rang: (x)=> x >  39 && x <= 45, diag: "Average", rank:"III"            },
    {perc:75,  rang: (x)=> x >  45 && x <= 49, diag: "Higher than average", rank:"II" },
    {perc:90,  rang: (x)=> x >  49 && x <= 52, diag: "Higher than average", rank:"II+"},
    {perc:99,  rang: (x)=> x >  52 && x <= 56, diag: "Superior", rank:"I"             },
    {perc:100, rang: (x)=> x >  56 && x <= 60, diag: "Superior", rank:"I"             }
  ]},
  {age_group: (x)=> x == 18, scores:[
    {perc:1,   rang: (x)=> x            <= 29, diag: "Deficient", rank:"V"            },
    {perc:10,  rang: (x)=> x >  29 && x <= 36, diag: "Lower than average", rank:"IV"  },
    {perc:25,  rang: (x)=> x >  36 && x <= 42, diag: "Lower than average", rank:"IV+" },
    {perc:50,  rang: (x)=> x >  42 && x <= 46, diag: "Average", rank:"III"            },
    {perc:75,  rang: (x)=> x >  46 && x <= 50, diag: "Higher than average", rank:"II" },
    {perc:90,  rang: (x)=> x >  50 && x <= 53, diag: "Higher than average", rank:"II+"},
    {perc:99,  rang: (x)=> x >  53 && x <= 57, diag: "Superior", rank:"I"             },
    {perc:100, rang: (x)=> x >  57 && x <= 60, diag: "Superior", rank:"I"             }
  ]},
  {age_group: (x)=> x == 19, scores:[
    {perc:1,   rang: (x)=> x            <= 30, diag: "Deficient", rank:"V"            },
    {perc:10,  rang: (x)=> x >  30 && x <= 37, diag: "Lower than average", rank:"IV"  },
    {perc:25,  rang: (x)=> x >  37 && x <= 43, diag: "Lower than average", rank:"IV+" },
    {perc:50,  rang: (x)=> x >  43 && x <= 47, diag: "Average", rank:"III"            },
    {perc:75,  rang: (x)=> x >  47 && x <= 51, diag: "Higher than average", rank:"II" },
    {perc:90,  rang: (x)=> x >  51 && x <= 54, diag: "Higher than average", rank:"II+"},
    {perc:99,  rang: (x)=> x >  54 && x <= 57, diag: "Superior", rank:"I"             },
    {perc:100, rang: (x)=> x >  57 && x <= 60, diag: "Superior", rank:"I"             }
  ]},
  {age_group: (x)=> x == 20 || x == 21, scores:[
    {perc:1,   rang: (x)=> x            <= 30, diag: "Deficient", rank:"V"            },
    {perc:10,  rang: (x)=> x >  30 && x <= 37, diag: "Lower than average", rank:"IV"  },
    {perc:25,  rang: (x)=> x >  37 && x <= 43, diag: "Lower than average", rank:"IV+" },
    {perc:50,  rang: (x)=> x >  43 && x <= 47, diag: "Average", rank:"III"            },
    {perc:75,  rang: (x)=> x >  47 && x <= 51, diag: "Higher than average", rank:"II" },
    {perc:90,  rang: (x)=> x >  51 && x <= 54, diag: "Higher than average", rank:"II+"},
    {perc:99,  rang: (x)=> x >  54 && x <= 58, diag: "Superior", rank:"I"             },
    {perc:100, rang: (x)=> x >  58 && x <= 60, diag: "Superior", rank:"I"             }
  ]},
  {age_group: (x)=> x >= 22 && x <= 65, scores:[
    {perc:1,   rang: (x)=> x            <= 31, diag: "Deficient", rank:"V"            },
    {perc:10,  rang: (x)=> x >  31 && x <= 38, diag: "Lower than average", rank:"IV"  },
    {perc:25,  rang: (x)=> x >  38 && x <= 44, diag: "Lower than average", rank:"IV+" },
    {perc:50,  rang: (x)=> x >  44 && x <= 48, diag: "Average", rank:"III"            },
    {perc:75,  rang: (x)=> x >  48 && x <= 52, diag: "Higher than average", rank:"II" },
    {perc:90,  rang: (x)=> x >  52 && x <= 55, diag: "Higher than average", rank:"II+"},
    {perc:99,  rang: (x)=> x >  55 && x <= 59, diag: "Superior", rank:"I"             },
    {perc:100, rang: (x)=> x >  59 && x <= 60, diag: "Superior", rank:"I"             }
  ]},

]

const iqChart = [
  { iq: 70, pct: "< 0.1%", desc: "你的世界或许有些独特，节奏慢一点也没关系。每个人都有自己的花期，愿你被温柔以待，慢慢发现属于自己的光亮。" },
  { iq: 70, pct: "< 0.1%", desc: "你的世界或许有些独特，节奏慢一点也没关系。每个人都有自己的花期，愿你被温柔以待，慢慢发现属于自己的光亮。" },
  { iq: 70, pct: "0.20%", desc: "你的世界或许有些独特，节奏慢一点也没关系。每个人都有自己的花期，愿你被温柔以待，慢慢发现属于自己的光亮。" },
  { iq: 70, pct: "0.50%", desc: "你的世界或许有些独特，节奏慢一点也没关系。每个人都有自己的花期，愿你被温柔以待，慢慢发现属于自己的光亮。" },
  { iq: 70, pct: "1.00%", desc: "你的世界或许有些独特，节奏慢一点也没关系。每个人都有自己的花期，愿你被温柔以待，慢慢发现属于自己的光亮。" },
  { iq: 70, pct: "1.20%", desc: "你的世界或许有些独特，节奏慢一点也没关系。每个人都有自己的花期，愿你被温柔以待，慢慢发现属于自己的光亮。" },
  { iq: 70, pct: "1.50%", desc: "你的世界或许有些独特，节奏慢一点也没关系。每个人都有自己的花期，愿你被温柔以待，慢慢发现属于自己的光亮。" },
  { iq: 70, pct: "1.80%", desc: "你的世界或许有些独特，节奏慢一点也没关系。每个人都有自己的花期，愿你被温柔以待，慢慢发现属于自己的光亮。" },
  { iq: 70, pct: "2.10%", desc: "你的世界或许有些独特，节奏慢一点也没关系。每个人都有自己的花期，愿你被温柔以待，慢慢发现属于自己的光亮。" },
  { iq: 70, pct: "2.30%", desc: "你的世界或许有些独特，节奏慢一点也没关系。每个人都有自己的花期，愿你被温柔以待，慢慢发现属于自己的光亮。" },
  { iq: 70, pct: "2.70%", desc: "你的世界或许有些独特，节奏慢一点也没关系。每个人都有自己的花期，愿你被温柔以待，慢慢发现属于自己的光亮。" },
  { iq: 71, pct: "3.20%", desc: "你拥有细腻的感知力，或许不擅长复杂的推理，但一定很懂得生活的温暖。保持这份纯真，世界会回馈你更多的爱。" },
  { iq: 72, pct: "3.70%", desc: "你拥有细腻的感知力，或许不擅长复杂的推理，但一定很懂得生活的温暖。保持这份纯真，世界会回馈你更多的爱。" },
  { iq: 73, pct: "4.20%", desc: "你拥有细腻的感知力，或许不擅长复杂的推理，但一定很懂得生活的温暖。保持这份纯真，世界会回馈你更多的爱。" },
  { iq: 74, pct: "4.80%", desc: "你拥有细腻的感知力，或许不擅长复杂的推理，但一定很懂得生活的温暖。保持这份纯真，世界会回馈你更多的爱。" },
  { iq: 75, pct: "5.40%", desc: "你的思维清晰而稳定，能够妥善处理日常事务。虽然还未达到顶尖，但这份踏实难能可贵。继续保持，未来可期。" },
  { iq: 76, pct: "6.10%", desc: "你的思维清晰而稳定，能够妥善处理日常事务。虽然还未达到顶尖，但这份踏实难能可贵。继续保持，未来可期。" },
  { iq: 77, pct: "6.80%", desc: "你的思维清晰而稳定，能够妥善处理日常事务。虽然还未达到顶尖，但这份踏实难能可贵。继续保持，未来可期。" },
  { iq: 78, pct: "7.50%", desc: "你的思维清晰而稳定，能够妥善处理日常事务。虽然还未达到顶尖，但这份踏实难能可贵。继续保持，未来可期。" },
  { iq: 79, pct: "8.10%", desc: "你的思维清晰而稳定，能够妥善处理日常事务。虽然还未达到顶尖，但这份踏实难能可贵。继续保持，未来可期。" },
  { iq: 80, pct: "9.10%", desc: "你的思维清晰而稳定，能够妥善处理日常事务。虽然还未达到顶尖，但这份踏实难能可贵。继续保持，未来可期。" },
  { iq: 81, pct: "10.20%", desc: "你的思维清晰而稳定，能够妥善处理日常事务。虽然还未达到顶尖，但这份踏实难能可贵。继续保持，未来可期。" },
  { iq: 82, pct: "11.50%", desc: "你的思维清晰而稳定，能够妥善处理日常事务。虽然还未达到顶尖，但这份踏实难能可贵。继续保持，未来可期。" },
  { iq: 83, pct: "13.00%", desc: "你拥有良好的理解力，能轻松应对大多数生活场景。你比许多人更敏锐，只要多一点自信，就能解锁更多可能。" },
  { iq: 84, pct: "14.50%", desc: "你拥有良好的理解力，能轻松应对大多数生活场景。你比许多人更敏锐，只要多一点自信，就能解锁更多可能。" },
  { iq: 85, pct: "16.20%", desc: "你拥有良好的理解力，能轻松应对大多数生活场景。你比许多人更敏锐，只要多一点自信，就能解锁更多可能。" },
  { iq: 86, pct: "17.90%", desc: "你拥有良好的理解力，能轻松应对大多数生活场景。你比许多人更敏锐，只要多一点自信，就能解锁更多可能。" },
  { iq: 87, pct: "19.80%", desc: "你拥有良好的理解力，能轻松应对大多数生活场景。你比许多人更敏锐，只要多一点自信，就能解锁更多可能。" },
  { iq: 88, pct: "21.60%", desc: "恭喜你进入中等偏上行列！你的逻辑思维清晰，学习能力强。你比大多数人更聪明，只要善用天赋，定能成就非凡。" },
  { iq: 89, pct: "23.50%", desc: "恭喜你进入中等偏上行列！你的逻辑思维清晰，学习能力强。你比大多数人更聪明，只要善用天赋，定能成就非凡。" },
  { iq: 90, pct: "25.20%", desc: "恭喜你进入中等偏上行列！你的逻辑思维清晰，学习能力强。你比大多数人更聪明，只要善用天赋，定能成就非凡。" },
  { iq: 92, pct: "30.10%", desc: "恭喜你进入中等偏上行列！你的逻辑思维清晰，学习能力强。你比大多数人更聪明，只要善用天赋，定能成就非凡。" },
  { iq: 94, pct: "34.50%", desc: "恭喜你进入中等偏上行列！你的逻辑思维清晰，学习能力强。你比大多数人更聪明，只要善用天赋，定能成就非凡。" },
  { iq: 96, pct: "39.80%", desc: "恭喜你进入中等偏上行列！你的逻辑思维清晰，学习能力强。你比大多数人更聪明，只要善用天赋，定能成就非凡。" },
  { iq: 98, pct: "44.80%", desc: "恭喜你进入中等偏上行列！你的逻辑思维清晰，学习能力强。你比大多数人更聪明，只要善用天赋，定能成就非凡。" },
  { iq: 100, pct: "50.00%", desc: "你的智商为 100，正好处于人群平均水平，与 50% 的同龄人相当。" },
  { iq: 101, pct: "55.20%", desc: "你已经超越了半数以上的人，思维敏捷，见解独到。你的智慧让你在生活中游刃有余，继续保持这份从容，你会更出色。" },
  { iq: 103, pct: "60.60%", desc: "你已经超越了半数以上的人，思维敏捷，见解独到。你的智慧让你在生活中游刃有余，继续保持这份从容，你会更出色。" },
  { iq: 105, pct: "65.50%", desc: "你已经超越了半数以上的人，思维敏捷，见解独到。你的智慧让你在生活中游刃有余，继续保持这份从容，你会更出色。" },
  { iq: 107, pct: "69.90%", desc: "优秀！ 你的逻辑推理能力很强，能迅速抓住问题核心。你比四分之三的人都聪明，这份天赋将助你在任何领域闪闪发光。" },
  { iq: 109, pct: "72.60%", desc: "优秀！ 你的逻辑推理能力很强，能迅速抓住问题核心。你比四分之三的人都聪明，这份天赋将助你在任何领域闪闪发光。" },
  { iq: 110, pct: "74.80%", desc: "优秀！ 你的逻辑推理能力很强，能迅速抓住问题核心。你比四分之三的人都聪明，这份天赋将助你在任何领域闪闪发光。" },
  { iq: 112, pct: "77.20%", desc: "你的智慧令人赞叹，属于前15%的精英。你善于解决复杂难题，思维深邃。请珍惜这份天赋，用它去创造更美好的世界。" },
  { iq: 113, pct: "80.50%", desc: "你的智慧令人赞叹，属于前16%的精英。你善于解决复杂难题，思维深邃。请珍惜这份天赋，用它去创造更美好的世界。" },
  { iq: 115, pct: "84.10%", desc: "你的智慧令人赞叹，属于前17%的精英。你善于解决复杂难题，思维深邃。请珍惜这份天赋，用它去创造更美好的世界。" },
  { iq: 116, pct: "86.40%", desc: "极度优秀！ 你的大脑像精密的仪器，反应快、洞察深。你超越了近九成的人，是难得的人才。愿你用智慧照亮他人。" },
  { iq: 118, pct: "88.50%", desc: "极度优秀！ 你的大脑像精密的仪器，反应快、洞察深。你超越了近九成的人，是难得的人才。愿你用智慧照亮他人。" },
  { iq: 119, pct: "89.80%", desc: "极度优秀！ 你的大脑像精密的仪器，反应快、洞察深。你超越了近九成的人，是难得的人才。愿你用智慧照亮他人。" },
  { iq: 120, pct: "91.00%", desc: "天才的边缘！ 你的智力超群，思维跳跃而深刻。你能看到别人看不到的规律。世界很大，正等待你去探索和征服。" },
  { iq: 122, pct: "92.40%", desc: "天才的边缘！ 你的智力超群，思维跳跃而深刻。你能看到别人看不到的规律。世界很大，正等待你去探索和征服。" },
  { iq: 124, pct: "93.80%", desc: "天才的边缘！ 你的智力超群，思维跳跃而深刻。你能看到别人看不到的规律。世界很大，正等待你去探索和征服。" },
  { iq: 125, pct: "95.10%", desc: "万里挑一的智者！ 你的推理能力几乎完美，超越了97%的人。你拥有改变世界的潜力，请勇敢追梦，不要设限。" },
  { iq: 127, pct: "96.20%", desc: "万里挑一的智者！ 你的推理能力几乎完美，超越了98%的人。你拥有改变世界的潜力，请勇敢追梦，不要设限。" },
  { iq: 129, pct: "97.30%", desc: "万里挑一的智者！ 你的推理能力几乎完美，超越了99%的人。你拥有改变世界的潜力，请勇敢追梦，不要设限。" },
  { iq: 130, pct: "97.80%", desc: "极优水平！ 你是真正的佼佼者，站在金字塔的顶端。你的智慧深邃如海，愿你用这份天赋造福社会，成为他人的灯塔。" },
  { iq: 134, pct: "98.40%", desc: "罕见的天才！ 你的思维速度常人难以企及，洞察力惊人。你是人群的瑰宝，愿你的智慧如星辰般闪耀，指引方向。" },
  { iq: 138, pct: "98.90%", desc: "罕见的天才！ 你的思维速度常人难以企及，洞察力惊人。你是人群的瑰宝，愿你的智慧如星辰般闪耀，指引方向。" },
  { iq: 142, pct: "99.40%", desc: "近乎完美的智力！ 你超越了99%以上的人，是真正的天选之子。你的存在本身就是奇迹，请用智慧书写传奇。" },
  { iq: 146, pct: "99.70%", desc: "近乎完美的智力！ 你超越了100%以上的人，是真正的天选之子。你的存在本身就是奇迹，请用智慧书写传奇。" },
  { iq: 150, pct: "99.90%", desc: "人类智力的天花板！ 满分通过，你是万里无一的超级天才。你的大脑蕴藏着无限可能，愿你的智慧之光，照亮整个人类文明。" },
];

function getIQResult(score) {
  const normalized = Math.min(Math.max(score, 0), iqChart.length - 1);
  return iqChart[normalized] || iqChart[0];
}


// Shared helpers
const ITEM_PER_ROW = 2;

function clamp(v, min, max){
  return Math.max(min, Math.min(max, v));
}

function getAgeResults(total, age){
  for (const group of age_score){
    if (group.age_group(parseInt(age))){
      return group.scores.find((s) => s.rang(total)) ?? null;
    }
  }
  return null;
}

function formatTime(seconds){
  const m = Math.floor(seconds / 60).toString().padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function Timer({initialSeconds, running, onTimeout}){
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (!running) return;
    if (seconds <= 0) {
      onTimeout?.();
      return;
    }
    const id = window.setInterval(() => setSeconds((x) => x - 1), 1000);
    return () => window.clearInterval(id);
  }, [running, seconds, onTimeout]);

  useEffect(() => setSeconds(initialSeconds), [initialSeconds]);

  return <span className="timer">{formatTime(seconds)}</span>;
}

function QuestionCard({item, selected, onSelect}){
  const answered = Boolean(selected);
  return (
    <div className={`card question-card ${answered ? "answered" : ""}`}>
      <div className={`card-header ${answered ? "bg-success" : "bg-warning"}`}>{item.N}</div>
      <img src={item.Q} className="card-img-top" alt={item.N} />
      <div className="card-body">
        <div className="options-grid">
          {item.O.map((opt) => (
            <button
              key={opt.index}
              type="button"
              className={`option-btn ${selected === String(opt.index) ? "selected" : ""}`}
              onClick={() => onSelect(item.N, String(opt.index))}
            >
              <img src={opt.sprite} alt="option" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Overview({items, answers, currentIndex, onJump}){
  const doneCount = items.filter((item) => Boolean(answers[item.N])).length;
  const pendingCount = items.length - doneCount;

  return (
    <div className="overview">
      <div className="overview-header">
        <h5 className="mb-1">题目总览</h5>
        <div className="overview-summary">
          <span className="badge bg-success">已做 {doneCount}</span>
          <span className="badge bg-warning text-dark ms-2">未做 {pendingCount}</span>
        </div>
      </div>
      <div className="overview-grid">
        {items.map((item, idx) => {
          const done = Boolean(answers[item.N]);
          return (
            <button
              key={item.N}
              type="button"
              className={`overview-item ${done ? "done" : "pending"} ${idx === currentIndex ? "active" : ""}`}
              onClick={() => onJump(idx)}
            >
              {item.N}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ResultPage({age, score, total, results, iqResult, onRetry}){
  return (
    <div className="result-page">
      <div className="card text-dark bg-light mb-3" style={{maxWidth: "30rem", margin: "auto"}}>
        <div className="card-header">测试结果</div>
        <div className="card-body">
          <div className="result-stats">
            <div className="result-item">
              <div className="result-label">年龄</div>
              <div className="result-value">{age}</div>
            </div>
            <div className="result-item">
              <div className="result-label">做对题数</div>
              <div className="result-value">{score}/{total}</div>
            </div>
            <div className="result-item">
              <div className="result-label">智商（IQ）</div>
              <div className="result-value">{iqResult?.iq ?? "N/A"}</div>
            </div>
            <div className="result-item">
              <div className="result-label">超越人群</div>
              <div className="result-value">{iqResult?.pct ?? "N/A"}</div>
            </div>
          </div>

          <div className="result-desc">
            <p className="fw-bold">测试说明</p>
            <p className="small text-muted">
              本轮测试得分基于国际通用的准推理测验，理论依据为斯皮尔曼的智力二因素论，并与个体所属的常模相比较。
              人的智商呈正态分布，平均值为100分，标准差为15分。即68.2%的人的智商在85-115之间；95.4%的人的智商在70-130之间；99.6%的人的智商在55-145之间。
            </p>
          </div>

          <div className="result-desc mt-3">
            <p className="fw-bold">智力水平描述</p>
            <p>{iqResult?.desc ?? "没有足够的数据来评估，请完成测试后再试。"}</p>
          </div>
        </div>
        <div className="card-footer text-end">
          <button className="btn btn-secondary" onClick={onRetry}>重测</button>
        </div>
      </div>
    </div>
  );
}

function KeyVerificationPage({onVerify}){
  const [key, setKey] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (key.length !== 16) {
      setError("密钥必须是16位");
      return;
    }
    if (key[0] !== 'K') {
      setError("密钥错误");
      return;
    }
    if (!key.endsWith('Tz')) {
      setError("密钥错误");
      return;
    }
    setError("");
    onVerify();
  };

  return (
    <div className="key-verification-page">
      <div className="card text-white bg-dark mx-auto" style={{maxWidth: "34rem"}}>
        <div className="card-header">密钥验证</div>
        <div className="card-body">
          <h5 className="card-title">请输入访问密钥</h5>
          <p>密钥必须是16位，第一位为'K'，以'Tz'结尾。</p>
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <span className="input-group-text">密钥</span>
              <input
                type="text"
                className="form-control"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                placeholder="请输入16位密钥"
                maxLength={16}
              />
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <button className="btn btn-info w-100" type="submit">
              验证
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function StartPage({age, onChangeAge, onStart}){
  return (
    <div className="start-page">
      <div className="card text-white bg-dark mx-auto" style={{maxWidth: "34rem"}}>
        <div className="card-header">说明</div>
        <div className="card-body">
          <h5 className="card-title">渐进矩阵测试</h5>
          <p>这是一项非语言智力测试，旨在评估您的抽象推理能力和一般智力。</p>
          <p>你的任务是分析图案并选择缺失的形状。你有45分钟的时间完成60个项目。</p>
        </div>
        <div className="card-body">
          <div className="input-group mb-3">
            <span className="input-group-text">年龄</span>
            <input
              type="number"
              className="form-control"
              value={age}
              onChange={(e) => onChangeAge(e.target.value)}
              placeholder="请输入年龄"
              min={5}
            />
          </div>
          <button className="btn btn-info w-100" onClick={onStart} disabled={!age || Number(age) <= 0}>
            开始测试
          </button>
        </div>
      </div>
    </div>
  );
}

function App(){
  const [isKeyVerified, setIsKeyVerified] = useState(false);
  const [age, setAge] = useState("");
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [timerRunning, setTimerRunning] = useState(false);
  const [activeTab, setActiveTab] = useState("quiz");

  const total = S.length;
  const currentItem = S[currentIndex];
  const score = Object.entries(answers).reduce((acc, [key, value]) => {
    const item = S.find((i) => i.N === key);
    return item && item.A === value ? acc + 1 : acc;
  }, 0);

  const results = submitted ? getAgeResults(score, age) : null;
  const iqResult = submitted ? getIQResult(score) : null;

  const handleSelect = (name, value) => {
    setAnswers((prev) => ({ ...prev, [name]: value }));
    // 自动跳下一题
    setTimeout(() => setCurrentIndex((i) => Math.min(total - 1, i + 1)), 180);
  };

  const handleStart = () => {
    setStarted(true);
    setTimerRunning(true);
    setActiveTab("quiz");
  };

  const handleTimeout = () => {
    setTimerRunning(false);
    setSubmitted(true);
  };

  const handleFinish = () => {
    setTimerRunning(false);
    setSubmitted(true);
  };

  const handleRetry = () => {
    setStarted(false);
    setSubmitted(false);
    setAnswers({});
    setCurrentIndex(0);
    setTimerRunning(false);
    setActiveTab("quiz");
  };

  return (
    <div className="app">
      {!isKeyVerified ? (
        <KeyVerificationPage onVerify={() => setIsKeyVerified(true)} />
      ) : !started ? (
        <StartPage age={age} onChangeAge={setAge} onStart={handleStart} />
      ) : submitted ? (
        <ResultPage age={age} score={score} total={total} results={results} iqResult={iqResult} onRetry={handleRetry} />
      ) : (
        <div className="quiz-layout">
          <header className="quiz-header">
            <div className="quiz-tabs">
              <button
                className={`tab-btn ${activeTab === "quiz" ? "active" : ""}`}
                onClick={() => setActiveTab("quiz")}
              >
                答题
              </button>
              <button
                className={`tab-btn ${activeTab === "overview" ? "active" : ""}`}
                onClick={() => setActiveTab("overview")}
              >
                总览
              </button>
            </div>
            <div className="quiz-meta">
              <div>第 {currentIndex + 1} 题 / 共 {total} 题</div>
              <Timer initialSeconds={45 * 60} running={timerRunning} onTimeout={handleTimeout} />
            </div>
          </header>

          <div className="quiz-body">
            {activeTab === "quiz" ? (
              <main className="quiz-main">
                <QuestionCard
                  item={currentItem}
                  selected={answers[currentItem.N]}
                  onSelect={handleSelect}
                />

                <div className="quiz-controls">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => setCurrentIndex((i) => clamp(i - 1, 0, total - 1))}
                    disabled={currentIndex === 0}
                  >
                    上一题
                  </button>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => setCurrentIndex((i) => clamp(i + 1, 0, total - 1))}
                    disabled={currentIndex === total - 1}
                  >
                    下一题
                  </button>
                  <button className="btn btn-success" onClick={handleFinish}>
                    完成
                  </button>
                </div>
              </main>
            ) : (
              <main className="quiz-main overview-tab">
                <Overview
                  items={S}
                  answers={answers}
                  currentIndex={currentIndex}
                  onJump={(idx) => {
                    setCurrentIndex(idx);
                    setActiveTab("quiz");
                  }}
                />
              </main>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
