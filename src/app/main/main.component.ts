

import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { from } from "rxjs";
import { of } from "rxjs";
import { pipe } from "rxjs";


@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})


export class MainComponent {


  subs_coloring(): void {
    <string>(
      String("use strict")
    );
    try {
      var sub_00: any = document.querySelectorAll(
        <string>(
          String(".sub00")
        ));
      var sub_01: any = document.querySelectorAll(
        <string>(
          String(".sub01")
        ));
      var sub_02: any = document.querySelectorAll(
        <string>(
          String(".sub02")
        ));
      var sub_10: any = document.querySelectorAll(
        <string>(
          String(".sub10")
        ));
      var sub_11: any = document.querySelectorAll(
        <string>(
          String(".sub11")
        ));
      var sub_12: any = document.querySelectorAll(
        <string>(
          String(".sub12")
        ));
      var sub_20: any = document.querySelectorAll(
        <string>(
          String(".sub20")
        ));
      var sub_21: any = document.querySelectorAll(
        <string>(
          String(".sub21")
        ));
      var sub_22: any = document.querySelectorAll(
        <string>(
          String(".sub22")
        ));
      [...sub_00, ...sub_11, ...sub_22].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(244, 67, 54)")
        );
      });
      [...sub_01, ...sub_12, ...sub_20].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(105, 240, 174)")
        );
      });
      [...sub_02, ...sub_10, ...sub_21].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(123, 31, 162)")
        );
      });
    } catch (err_2) {
      if (err_2) {
        console.clear();
        console.log(err_2);
      };
    };
  };


  rows_coloring(): void {
    <string>(
      String("use strict")
    );
    try {
      var y_0: any = document.querySelectorAll(
        <string>(
          String(".y0")
        ));
      var y_1: any = document.querySelectorAll(
        <string>(
          String(".y1")
        ));
      var y_2: any = document.querySelectorAll(
        <string>(
          String(".y2")
        ));
      var y_3: any = document.querySelectorAll(
        <string>(
          String(".y3")
        ));
      var y_4: any = document.querySelectorAll(
        <string>(
          String(".y4")
        ));
      var y_5: any = document.querySelectorAll(
        <string>(
          String(".y5")
        ));
      var y_6: any = document.querySelectorAll(
        <string>(
          String(".y6")
        ));
      var y_7: any = document.querySelectorAll(
        <string>(
          String(".y7")
        ));
      var y_8: any = document.querySelectorAll(
        <string>(
          String(".y8")
        ));
      [...y_0, ...y_3, ...y_6].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(244, 67, 54)")
        );
      });
      [...y_1, ...y_4, ...y_7].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(105, 240, 174)")
        );
      });
      [...y_2, ...y_5, ...y_8].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(123, 31, 162)")
        );
      });
    } catch (err_3) {
      if (err_3) {
        console.clear();
        console.log(err_3);
      };
    };
  };


  cols_coloring(): void {
    <string>(
      String("use strict")
    );
    try {
      var x_0: any = document.querySelectorAll(
        <string>(
          String(".x0")
        ));
      var x_1: any = document.querySelectorAll(
        <string>(
          String(".x1")
        ));
      var x_2: any = document.querySelectorAll(
        <string>(
          String(".x2")
        ));
      var x_3: any = document.querySelectorAll(
        <string>(
          String(".x3")
        ));
      var x_4: any = document.querySelectorAll(
        <string>(
          String(".x4")
        ));
      var x_5: any = document.querySelectorAll(
        <string>(
          String(".x5")
        ));
      var x_6: any = document.querySelectorAll(
        <string>(
          String(".x6")
        ));
      var x_7: any = document.querySelectorAll(
        <string>(
          String(".x7")
        ));
      var x_8: any = document.querySelectorAll(
        <string>(
          String(".x8")
        ));
      [...x_0, ...x_3, ...x_6].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(244, 67, 54)")
        );
      });
      [...x_1, ...x_4, ...x_7].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(105, 240, 174)")
        );
      });
      [...x_2, ...x_5, ...x_8].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(123, 31, 162)")
        );
      });
    } catch (err_4) {
      if (err_4) {
        console.clear();
        console.log(err_4);
      };
    };
  };


  null_coloring(): void {
    <string>(
      String("use strict")
    );
    try {
      var _tds_: any = document.querySelectorAll(
        <string>(
          String("td")
        ));
      [..._tds_].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(122, 122, 122)")
        );
      });
    } catch (err_5) {
      if (err_5) {
        console.clear();
        console.log(err_5);
      };
    };
  };


  i_fT_tF_o(): void {
    <string>(
      String("use strict")
    );
    try {
      var __tds__: any = document.querySelectorAll(
        <string>(
          String("td")
        ));
      var ____0tr: number[] = [];
      [...__tds__].forEach((cubicle) => {
        cubicle.innerHTML = <string>(
          String('0')
        );
        cubicle.style.color = <string>(
          String("rgb(31, 31, 31)")
        );
      });
      while (
        <number>(
          Number(____0tr.length)
        )
        <
        <number>(
          Number(9)
        )
      ) {
        var prob_pos_new_int_val: number = <number>(
          Number(Math.floor(Math.random()
            *
            <number>(
              Number(9)
            ))
            + <number>(
              Number(1)
            ))
        );
        if (
          <boolean>(
            Boolean(____0tr.includes(
              <number>(
                Number(prob_pos_new_int_val)
              )
            ))
          )
          ===
          <boolean>(
            Boolean(false)
          )
        ) {
          ____0tr.push(
            <number>(
              Number(prob_pos_new_int_val)
            ))
        };
      };
      for (
        var indx_iter: number = <number>(
          Number(0)
        );
        indx_iter <= <number>(
          Number(8)
        );
        indx_iter += <number>(
          Number(1)
        )
      ) {
        __tds__[
          <number>(
            Number(indx_iter)
          )].innerHTML = <string>(
            String(____0tr[
              <number>(
                Number(indx_iter)
              )]));
      };
      __tds__[
        <number>(
          Number(9)
        )].innerHTML = <string>(
          String(____0tr[
            <number>(
              Number(6)
            )]));
      __tds__[
        <number>(
          Number(10)
        )].innerHTML = <string>(
          String(____0tr[
            <number>(
              Number(7)
            )]));
      __tds__[
        <number>(
          Number(11)
        )].innerHTML = <string>(
          String(____0tr[
            <number>(
              Number(8)
            )]));
      __tds__[
        <number>(
          Number(21)
        )].innerHTML = <string>(
          String(____0tr[
            <number>(
              Number(6)
            )]));
      __tds__[
        <number>(
          Number(22)
        )].innerHTML = <string>(
          String(____0tr[
            <number>(
              Number(7)
            )]));
      __tds__[
        <number>(
          Number(23)
        )].innerHTML = <string>(
          String(____0tr[
            <number>(
              Number(8)
            )]));
      for (
        var indx_iter: number = <number>(
          Number(0)
        );
        indx_iter <= <number>(
          Number(8)
        );
        indx_iter += <number>(
          Number(1)
        )
      ) {
        __tds__[
          <number>(
            Number(indx_iter)
          )
          + <number>(
            Number(12)
          )].innerHTML = <string>(
            String(____0tr[
              <number>(
                Number(indx_iter)
              )]));
      };
      __tds__[
        <number>(
          Number(18)
        )].innerHTML = <string>(
          String(____0tr[
            <number>(
              Number(3)
            )]));
      __tds__[
        <number>(
          Number(19)
        )].innerHTML = <string>(
          String(____0tr[
            <number>(
              Number(4)
            )]));
      __tds__[
        <number>(
          Number(20)
        )].innerHTML = <string>(
          String(____0tr[
            <number>(
              Number(5)
            )]));
      __tds__[
        <number>(
          Number(24)
        )].innerHTML = <string>(
          String(____0tr[
            <number>(
              Number(0)
            )]));
      __tds__[
        <number>(
          Number(25)
        )].innerHTML = <string>(
          String(____0tr[
            <number>(
              Number(1)
            )]));
      __tds__[
        <number>(
          Number(26)
        )].innerHTML = <string>(
          String(____0tr[
            <number>(
              Number(2)
            )]));
      for (
        var ___indx_iter: number = <number>(
          Number(0)
        );
        ___indx_iter <= <number>(
          Number(26)
        );
        ___indx_iter += <number>(
          Number(1)
        )
      ) {
        __tds__[
          <number>(
            Number(___indx_iter)
          )].style.color = <string>(
            String("rgb(244, 244, 244)")
          );
      };
      {
        for (
          var __10ts_repe_: number = <number>(
            Number(1)
          );
          __10ts_repe_ <= <number>(
            Number(10)
          );
          __10ts_repe_ += <number>(
            Number(1)
          )
        ) {
          this.fT_tF();
        };
        {
          var _clls_: any = document.querySelectorAll(
            <string>(
              String("td")
            ));
          var null_flag: boolean = <boolean>(
            Boolean(false)
          );
          for (
            var anot_indx_iter: number = <number>(
              Number(0)
            );
            anot_indx_iter <= <number>(
              Number(80)
            );
            anot_indx_iter += <number>(
              Number(1)
            )
          ) {
            if (
              <string>(
                String(_clls_[
                  <number>(
                    Number(anot_indx_iter)
                  )].innerHTML))
              ===
              <string>(
                String('0')
              )
            ) {
              null_flag = <boolean>(
                Boolean(true)
              );
            };
          };
          if (
            <boolean>(
              Boolean(null_flag)
            )
            ===
            <boolean>(
              Boolean(false)
            )
          ) {
            {
              var _cbcls_: any = document.querySelectorAll(
                <string>(
                  String("td")
                )
              );
              var pseudo_random_indexes: number[] = [];
              var generate_bttn: any = document.querySelector(
                <string>(
                  String("#generate-bttn")
                )
              );
              var solve_bttn: any = document.querySelector(
                <string>(
                  String("#solve-bttn")
                )
              );
              while (
                <number>(
                  Number(pseudo_random_indexes.length)
                )
                <
                <number>(
                  Number(40)
                )
              ) {
                var pos_prob_new_int_indx: number = <number>(
                  Number(Math.floor(Math.random()
                    * <number>(
                      Number(81)
                    ))));
                if (
                  <boolean>(
                    Boolean(pseudo_random_indexes.includes(
                      <number>(
                        Number(pos_prob_new_int_indx)
                      ))))
                  ===
                  <boolean>(
                    Boolean(false)
                  )
                ) {
                  pseudo_random_indexes.push(
                    <number>(
                      Number(pos_prob_new_int_indx)
                    ));
                };
              };
              for (
                var anot_anot_yindx_iter: number = <number>(
                  Number(0)
                );
                anot_anot_yindx_iter <= <number>(
                  Number(39)
                );
                anot_anot_yindx_iter += <number>(
                  Number(1)
                )
              ) {
                _cbcls_[
                  <number>(
                    Number(pseudo_random_indexes[
                      <number>(
                        Number(anot_anot_yindx_iter)
                      )]))].style.color = <string>(
                        String("rgb(31, 31, 31)")
                      );
              };
              generate_bttn.style.visibility = <string>(
                String("hidden")
              );
              solve_bttn.style.visibility = <string>(
                String("visible")
              );
            };
          } else {
            {
              this.i_fT_tF_o();
            };
          };
        };
      };
    } catch (err_6) {
      if (err_6) {
        console.clear();
        console.log(err_6);
      };
    };
  };



  fT_tF(): void {
    <string>(
      String("use strict")
    );
    try {
      var ___tds__: any = document.querySelectorAll(
        <string>(
          String("td")
        ));
      for (
        var yindx_iter: number = <number>(
          Number(27)
        );
        yindx_iter <= <number>(
          Number(80)
        );
        yindx_iter += <number>(
          Number(1)
        )
      ) {
        var its_sub: any = document.querySelectorAll(
          <string>(
            String(
              <string>(
                String('.')
              )
              +
              <string>(
                String(___tds__[
                  <number>(yindx_iter)].getAttribute(
                    <string>(
                      String("class")
                    ))).split(<string>(
                      String(' ')
                    ))[<number>(
                      Number(0)
                    )]
              )
            )
          )
        );
        var its___y: any = document.querySelectorAll(
          <string>(
            String(
              <string>(
                String('.')
              )
              +
              <string>(
                String(___tds__[
                  <number>(yindx_iter)].getAttribute(
                    <string>(
                      String("class")
                    ))).split(<string>(
                      String(' ')
                    ))[<number>(
                      Number(1)
                    )]
              )
            )
          )
        );
        var its___x: any = document.querySelectorAll(
          <string>(
            String(
              <string>(
                String('.')
              )
              +
              <string>(
                String(___tds__[
                  <number>(yindx_iter)].getAttribute(
                    <string>(
                      String("class")
                    ))).split(<string>(
                      String(' ')
                    ))[<number>(
                      Number(2)
                    )]
              )
            )
          )
        );
        var sub_vals: string[] | any[] | number[] = [];
        var y___vals: string[] | any[] | number[] = [];
        var x___vals: string[] | any[] | number[] = [];
        for (
          var indx___iter: number = <number>(
            Number(0)
          );
          indx___iter <= <number>(
            Number(8)
          );
          indx___iter += <number>(
            Number(1)
          )
        ) {
          sub_vals.push(
            <number>(
              Number(its_sub[
                <number>(
                  Number(indx___iter)
                )].innerHTML)));
          y___vals.push(
            <number>(
              Number(its___y[
                <number>(
                  Number(indx___iter)
                )].innerHTML)));
          x___vals.push(
            <number>(
              Number(its___x[
                <number>(
                  Number(indx___iter)
                )].innerHTML)));
        };
        for (
          var pos_prob_new_int_val: number = <number>(
            Number(1)
          );
          pos_prob_new_int_val <= <number>(
            Number(9)
          );
          pos_prob_new_int_val += <number>(
            Number(1)
          )
        ) {
          if (
            (
              <boolean>(
                Boolean(sub_vals.includes(
                  <number>(
                    Number(pos_prob_new_int_val)
                  ))))
              ===
              <boolean>(
                Boolean(false)
              )
            )
            &&
            (
              <boolean>(
                Boolean(y___vals.includes(
                  <number>(
                    Number(pos_prob_new_int_val)
                  ))))
              ===
              <boolean>(
                Boolean(false)
              )
            )
            &&
            (
              <boolean>(
                Boolean(x___vals.includes(
                  <number>(
                    Number(pos_prob_new_int_val)
                  ))))
              ===
              <boolean>(
                Boolean(false)
              )
            )
          ) {
            ___tds__[
              <number>(
                Number(yindx_iter)
              )].innerHTML = <string>(
                String(pos_prob_new_int_val)
              );
            ___tds__[
              <number>(
                Number(yindx_iter)
              )].style.color = <string>(
                String("rgb(244, 244, 244)")
              );
          };
        };
        if (
          <string>(
            String(___tds__[
              <number>(
                Number(yindx_iter)
              )].innerHTML)
          )
          ===
          <string>(
            String('0')
          )
        ) {
          break;
        };
      };
    } catch (err_7) {
      if (err_7) {
        console.clear();
        console.log(err_7);
      };
    };
  };


  rerender_UI_state(): void {
    <string>(
      String("use strict")
    );
    try {
      var _____tds________: any = document.querySelectorAll(
        <string>(
          String("td")
        ));
      var ___generate_bttn: any = document.querySelector(
        <string>(
          String("#generate-bttn")
        ));
      var ___solve____bttn: any = document.querySelector(
        <string>(
          String("#solve-bttn")
        ));
      {
        [..._____tds________].forEach((_cll_) => {
          _cll_.style.color = <string>(
            String("rgb(244, 244, 244)")
          );
        });
      };
      {
        ___generate_bttn.style.visibility = <string>(
          String("visible")
        );
        ___solve____bttn.style.visibility = <string>(
          String("hidden")
        );
      };
    } catch (err_8) {
      if (err_8) {
        console.clear();
        console.log(err_8);
      };
    };
  };

};
