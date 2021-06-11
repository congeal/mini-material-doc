---
layout: page
---

# Page layout
## First
* A
* B
* C

## Second
1. A
2. B
3. C

## Third
```verilog
module register #(
    parameter W_DATA = 4;
)
(   input clk, resetn,
    input [W_DATA-1:0] i_data,
    output reg [W_DATA-1:0] o_data
);
    always @(posdege clk or resetn)
        if(!resetn)
            o_data <= 0;
        else
            o_data <= 1;
endmodule
```

## Fourth
something