<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class InfoController extends Controller
{
    //
    public function FrmAcessInfo()
    {
        if(session()->exists('studentid'))
        {
            $InfoOfStudent = DB::table('sinh_vien')->where('MSSV',session()->get('studentid'))->first();
            //dd($InfoOfStudent);
            return view('Student/student-info',['getInfoFromObject' => $InfoOfStudent]);
        }
        elseif(session()->exists('teacherid')){
            $InfoOfteacher = DB::table('giang_vien')->where('MSGV',session()->get('teacherid'))->first();
            //dd( $InfoOfteacher);
            return view('Student/student-info',['getInfoFromObject' => $InfoOfteacher]);
        }
    }
}
